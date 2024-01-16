import { useDispatch, useSelector } from "react-redux"
import {fetchTrails} from '../../store/trail'
import { useEffect } from "react"
import TrailIndexItem from "./TrailsIndexItem"
import { trailsArray } from "../../store/trail"
import "./TrailsIndex.css";


function TrailsIndex(){
    const trails = useSelector(trailsArray)

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchTrails())
    }, [dispatch]);
    return(
        <div>
        <ul id="trailsIndexWrapper">
            {trails.map(trail => 
                <TrailIndexItem key={trail.id} trail={trail}/>)}
        </ul>
        </div>
    )
}
export default TrailsIndex