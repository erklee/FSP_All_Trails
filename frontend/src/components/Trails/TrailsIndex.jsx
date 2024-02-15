import { useDispatch, useSelector } from "react-redux"
import {fetchTrails} from '../../store/trail'
import { useEffect } from "react"
import TrailIndexItem from "./TrailsIndexItem"
import { trailsArray } from "../../store/trail"
import "./TrailsIndex.css";
import splash from "../../../images/indeximage.avif" 
import { Link } from "react-router-dom"
import { fetchReviews } from "../../store/review"
import Searchbar from "../Searchbar/searchbar"



function TrailsIndex(){
    const trails = useSelector(trailsArray)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTrails())
        dispatch(fetchReviews())
    }, [dispatch]);
    
    return(
        <>
            <img src={splash} alt="splashbackground" id="splashbackground"/>

            <div className="container-search-welcome">
                <div id="text-top-of-search">
                    <h1>Find Your Outdoors</h1>
                </div>
                <div id="search-bar-splash">
                    <Searchbar/>
                </div>
                <div id="explore-link">
                    <Link to='/trails'>Explore nearby Trails</Link>
                </div>

            </div>
                <div className="parentwrapper">
                        <div id="newyorkfavorite">
                            <h1 id="TrailIndexHeader">
                                <Link to={'trails'} id="newyorkfavoritelink">New York Favorites</Link>
                            </h1>
                            
                        </div>
                        <br />
                        <div id="trailsIndexWrapper">
                            {trails.slice(0,3).map(trail => 
                                <TrailIndexItem key={trail.id} trail={trail}/>)}
                            <Link to='/trails' id="showIndexBoxLink">
                                <div id='showIndexBox'>
                                <h1 id='showIndexBoxContent'>Show More</h1>
                                </div>
                            </Link>
                        </div>
    
                </div>
            <div className='trailsindexfooter'>

            </div>
        
        </>
    )
}
export default TrailsIndex