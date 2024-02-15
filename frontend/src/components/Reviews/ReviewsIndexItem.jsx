import { useSelector } from "react-redux";
import "./ReviewsIndexItem.css"
import Rating from "../Ratings/RatingsStatic"
import { useState } from "react";
import ReviewDropDown from "./EditDropDown";

function ReviewIndexItem({review, trail}) {
    const [visible, setVisible] = useState(false);
    const currentUser = useSelector(state => state?.session?.user)
    const canEdit = currentUser?.id === review?.userId


    const handleDropDown = (e) => {
        e.preventDefault()
        setVisible(!visible)
    }
    
    return (
        <div className="reviews-index-parent">
            <div className="review-header">
                <div id="index-item-user">
                    {review?.username}
                </div>
                
                {canEdit && (
                    <div className="edit-container">
                        <button className="edit-ellipsis" onClick={handleDropDown}>&hellip;</button>
                        {visible && (
                            <div className="review-setting-drop-down">
                                <ReviewDropDown 
                                    review={review} 
                                    visible={visible} 
                                    setVisible={setVisible} 
                                    trail={trail}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Rating rating={review?.rating} />
            <p id="review-index-item">{review?.review}</p>
        </div>
    );
}

export default ReviewIndexItem