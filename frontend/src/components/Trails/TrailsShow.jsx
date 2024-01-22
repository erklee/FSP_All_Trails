import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './TrailsShow.css'


function TrailShow() {
    const {trailId} = useParams()
    

    
    const dispatch = useDispatch()
    const trail = useSelector(selectTrail(trailId))


    useEffect(() => {
       dispatch(fetchTrail(trailId))
    }, [dispatch, trailId]);

    return(
        <div>
            <Link to="/">Back</Link>
            <p>{trail?.name}</p>
           <img src={trail?.photoUrl} alt="test" />

            <div className="showfooter"></div>
        </div>
    )

}

export default TrailShow