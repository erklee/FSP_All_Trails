import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import './TrailsShow.css'
// import Ratings from "../Ratings/Ratings"
import testImage from '../../../images/high_line_park.webp'
import ReviewsIndex from "../Reviews/ReviewsIndex"


function TrailShow() {
    const {trailId} = useParams()
    
    const dispatch = useDispatch()
    const trail = useSelector(selectTrail(trailId))

    useEffect(() => {
        dispatch(fetchTrail(trailId))
    }, [dispatch, trailId]);

    return(
    
            <div className="parent-show-wrapper">
                <h1 className="show-divider"></h1>
                <div className="show-wrapper">
                    <div id="img-wrapper">
                    <img src={testImage} alt="highline" id="show-image"/>
                        <p id="show-trail-name">{trail?.name}</p>

                    </div>
                    <div id="show-image-footer">
                        <div></div>
                        <div id="show-page-reviews-index">
                            <ReviewsIndex/>
                        </div>
                    </div>
                </div>
                <footer className="show-footer"></footer>
            </div>

            
        
                // <Ratings />
                // <Link to="/">Back</Link>
                // <p>{trail?.name}</p>
                // <img src={trail?.photoUrl} alt="test" />
    )

}

export default TrailShow