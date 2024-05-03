import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CreateReview from "../Reviews/CreateReviews"
import './TrailsShow.css'

import ReviewsIndex from "../Reviews/ReviewsIndex"
import Footer from "../Navigation/Footer"
import AverageRatingReview from "../Ratings/AvgRatingReview"
import ReviewMapWrapper from "../Maps/ReviewMap"
import { useState } from "react"

import WeatherCard from "./WeatherCard"

function TrailShow() {
    const {trailId} = useParams()
    
    const dispatch = useDispatch()
    const trail = useSelector(selectTrail(trailId))
    const [weather, setWeather] = useState([])

    useEffect(() => {
        dispatch(fetchTrail(trailId))
    }, [dispatch, trailId]);

    useEffect(() => {
        const showWeather = async () => {
            try {
                if (trail && trail?.lat !== undefined && trail?.lon !== undefined) {
                    const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
                    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${trail?.lat}&lon=${trail?.lon}&units=imperial&appid=${apiKey}`
                    const response = await fetch(apiUrl)

                    const weatherData = await response.json();
                    if (weatherData && weatherData?.daily) {
                        setWeather(weatherData?.daily.slice(0,5))
              
                    }
                }
            } catch (error) {
                console.error('weather not fetching', error)
            }
        }
        showWeather()
    }, [trail?.lat, trail?.lon])

    // console.log(weather)

    return(
        <>
            <div className="parent-show-wrapper">
                <h1 className="show-divider"></h1>
                {/* <div>{Object.values(weather)}</div> */}
                <div className="show-wrapper">
                    <div id="img-wrapper">
                    <img src={trail?.photoUrl} alt="highline" id="show-image"/>
                        <p id="show-trail-name">{trail?.name}</p>
                        <p id="show-trail-difficulty">{trail?.difficulty}</p>
                        <p id="show-trail-rating"></p>
                        <p id="show-trail-location">{trail?.location}</p>
                    </div>

                    <div id="show-image-footer">
                        <div id="show-trail-description"> {trail?.description}</div>
                        <div className="weather-cards-container">
                            {weather.map(day => (
                                <WeatherCard key={day.dt} day={day} />
                            ))}
                        </div>
                        <div id="review-map-wrapper">
                            <ReviewMapWrapper trail={trail}/>
                        </div>
                            <AverageRatingReview trail={trail}/>
                        <div id="show-create-review">
                            <CreateReview key={trail?.id} trail={trail}/>
                        </div>

                        <div id="show-page-reviews-index">
                            <ReviewsIndex trail={trail}/>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
        </>

            
        
                // <Ratings />
                // <Link to="/">Back</Link>
                // <p>{trail?.name}</p>
                // <img src={trail?.photoUrl} alt="test" />
    )

}

export default TrailShow