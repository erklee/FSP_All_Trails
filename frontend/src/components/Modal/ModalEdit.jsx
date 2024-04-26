import { useState } from "react";
import { useDispatch } from "react-redux";
import * as modalActions from "../../store/modal"
import * as reviewActions from "../../store/review"
import Ratings from "../Ratings/Ratings";

function EditModal({ review, trail, visible, setVisible }){
    const dispatch = useDispatch()
    const [editReview, setEditReview] = useState(review.review);
    const [rating, setRating] = useState(review.rating);
    const [errors, setErrors] = useState(null);

    const handleEditReview = async (e) => {
        e.preventDefault();

        const trimReview = editReview.trim();

        if (trimReview <= 3) {
          setErrors("Review must be between 3 and 250 chars");
          return
        }
    
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
        e.preventDefault();
        dispatch(modalActions.hideModal("editReview"))
        setErrors([])
    };


    return (
        <div id="modal">
          <div id="modal-background" />
          <div id="modal-content">
            <p id="modal-close-button" onClick={handleModalClose}>X</p>
            <br />
            <br />
            <h3 id="modal-trail-name">{trail?.name}</h3>
            <br />
            <h3 id="modal-rating-string">Rating</h3>
            <br />
            <div className="modal-star-rating">
              <Ratings rating={rating} setSelectedRating={setRating} />
  
            </div>
            <br />
            <h3 id="modal-review-string">Review</h3>
            {errors &&  <ul id="error-messages">{errors}</ul>}
            <br />
            <div className="review-form-container">
            <textarea name="review-form" id="modal-review-form" placeholder="Type review" type="textarea" 
            maxLength="10000" value={editReview} onChange={e => setEditReview(e.target.value)}></textarea>
              <div className="modal-submit-button-container">
                  <button id="modal-submit-button"
                    onClick={handleEditReview} type="submit">SUBMIT</button>
  
              </div>
  
            </div>
          </div>
        </div>
      );
}



export default EditModal