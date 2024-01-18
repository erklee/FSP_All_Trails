import { useDispatch, useSelector } from "react-redux"
import {fetchTrails} from '../../store/trail'
import { useEffect } from "react"
import TrailIndexItem from "./TrailsIndexItem"
import { trailsArray } from "../../store/trail"
import "./TrailsIndex.css";
import pinkbackground from "../../../images/background1.avif"



function TrailsIndex(){
    const trails = useSelector(trailsArray)

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchTrails())
    }, [dispatch]);
    return(
        <>
            <img src={pinkbackground} alt="splashbackground" id="splashbackground" />
            <div>
                <h1 id="TrailIndexHeader">New York Favorites</h1>
                <br />
                <ul id="trailsIndexWrapper">
                    {trails.map(trail => 
                        <TrailIndexItem key={trail.id} trail={trail}/>)}
                </ul>
            </div>

            <div className='trailsindexfooter'>

            </div>
        
        </>
    )
}
export default TrailsIndex