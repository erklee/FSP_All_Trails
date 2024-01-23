import { useSelector } from "react-redux";
import "./ReviewsIndexItem.css"
// import Ratings from "../Ratings/Ratings";

function ReviewIndexItem({review}) {

    const currentUser = useSelector(state => state?.session.user)

    return (
        <>
            <div className="reviews-index-parent">
                <div id="index-item-user">
                    {currentUser?.username}
                </div>
                <p id="review-index-item">{review?.review}</p>
            </div>
        </>
    )
}

export default ReviewIndexItem