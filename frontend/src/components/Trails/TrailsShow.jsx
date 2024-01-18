import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './TrailsShow.css'


function TrailShow(){
    const {trailId} = useParams()
    
    // console.log(trailId)
    
    const dispatch = useDispatch()
    const trail = useSelector(selectTrail(trailId))
    // console.log(trail)

    useEffect(() => {
       dispatch(fetchTrail(trailId))
    }, [dispatch, trailId]);

    return(
        <div>
        <Link to="/">Back</Link>
        <p>{trail?.name}</p>
        <p>{trail?.description}</p>
        {/* <li key={trail.id} id="showTrailDescription">{trail.name}</li> */}
        </div>

    )

}

export default TrailShow