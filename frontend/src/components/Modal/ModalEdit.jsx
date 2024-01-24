import { useState } from "react";
import { useDispatch } from "react-redux";
import * as modalActions from "../../store/modal"
import * as reviewActions from "../../store/review"
import Ratings from "../Ratings/Ratings";

function EditModal({ review, trail, visible, setVisible }){
    const dispatch = useDispatch()
    const [editReview, setEditReview] = useState(review.review);
    const [rating, setRating] = useState(review.rating);

    const handleEditReview = async (e) => {
        e.preventDefault();
        const updateReview = {
            id: review.id,
            user_id: review.user_id,
            trail_id: review.trail_id,
            review: editReview,
            rating: rating,
        };
        dispatch(modalActions.hideModal("editReview"));
        await dispatch(reviewActions.updateReview(updateReview));
        await dispatch(reviewActions.fetchReviews())
        setVisible(!visible)
    };

    const handleModalClose = (e) => {
        e.preventDeault();
        dispatch(modalActions.hideModal("editReview"))
    };

    return (
        <div id="modal">
            <div id="modal-background" />
                <div id="modal-content">
                <p onClick={handleModalClose}>Close</p>
                <p>{trail?.name}</p>
                <Ratings rating={rating} setSelectedRating={setRating} />
                <textarea name="reviewform" id="review" placeholder="Type review" type="textarea" 
                maxLength="10000" value={review} onChange={e => setEditReview(e.target.value)}></textarea>
                <button id="modal-submit-button"
                onClick={handleEditReview} type="submit">SUBMIT</button>
            </div>
        </div>
    )
}


export default EditModal