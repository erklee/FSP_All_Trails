import { useParams } from "react-router-dom"
import { fetchTrail, selectTrail } from "../../store/trail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CreateReview from "../Reviews/CreateReviews"
import './TrailsShow.css'

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
                    <img src={trail?.photoUrl} alt="highline" id="show-image"/>
                        <p id="show-trail-name">{trail?.name}</p>
                        <p id="show-trail-difficulty">{trail?.difficulty}</p>
                        <p id="show-trail-rating"></p>
                        <p id="show-trail-location">{trail?.location}</p>
                    </div>
                    <div id="show-image-footer">
                        <div id="show-trail-description"> {trail?.description}</div>
                        <div id="show-create-review">
                            <CreateReview key={trail?.id} trail={trail}/>

                        </div>

                        <div id="show-page-reviews-index">
                            <ReviewsIndex trail={trail}/>
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