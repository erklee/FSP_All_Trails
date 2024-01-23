import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './TrailsShow.css'
import Ratings from "../Ratings/Ratings"
import testImage from '../../../images/high_line_park.webp'


function TrailShow() {
    const {trailId} = useParams()
    
    const dispatch = useDispatch()
    const trail = useSelector(selectTrail(trailId))

    useEffect(() => {
        dispatch(fetchTrail(trailId))
    }, [dispatch, trailId]);

    return(
        <>
            <div className="parent-show-wrapper">
                <div className="show-wrapper">
                    <img src={testImage} alt="highline" id="show-image"/>
                        <p id="show-trail-name">{trail?.name}</p>
                    <div id="show-image-footer">

                    </div>
                </div>
            </div>

            <footer className="show-footer"></footer>
        </>
                // <Ratings />
                // <Link to="/">Back</Link>
                // <p>{trail?.name}</p>
                // <img src={trail?.photoUrl} alt="test" />
    )

}

export default TrailShow