import { useState } from "react";
import * as modalActions from "../../store/modal"
import * as reviewActions from "../../store/review"
import { useDispatch, useSelector} from "react-redux"
import Ratings from "../Ratings/Ratings";
import "./Modal.css"
import close from "../../../images/close.png"


function Modal({ trail }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const currentUser = useSelector((state) => state.session.user)
  
  const handleModalClose = (e) => {
    e.preventDefault()
    dispatch(modalActions.hideModal("createReview"));
    setErrors([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimReview = review.trim();

    if (trimReview.length < 3 || trimReview.length > 250) {
      setErrors(["Review must be between 3 and 250 characters"]);
      return;
    }

    
    const newReview = {
      review: {
        user_id: currentUser.id,
        trail_id: trail.id,
        review: review,
        rating: rating
      }
    }
    try {
      await dispatch(reviewActions.createReview(newReview));
      dispatch(modalActions.hideModal("createReview"));
      await dispatch(reviewActions.fetchReviews());
      setErrors([]); 
  } catch (err) {
    console.log(err)
      setErrors(err); 
  }
  } 

    return (
      <div id="modal">
        <div id="modal-background" />
        <div id="modal-content">
          <img
            id="modal-close-button"
            onClick={handleModalClose}
            src={close}
            alt="Close"
            style={{ cursor: 'pointer' }} 
          />
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
          {/* {errors &&  <ul id="error-messages">{errors}</ul>} */}
          {errors.length > 0 && (
            <div className="error-messages">
              {errors.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
              ))}
            </div>
          )}
          <br />
          <div className="review-form-container">
          <textarea name="review-form" id="modal-review-form" placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect." type="textarea" 
          maxLength="10000" value={review} onChange={e => setReview(e.target.value)}></textarea>

            <div className="modal-submit-button-container">
                <button id="modal-submit-button"
                  onClick={handleSubmit} type="submit">SUBMIT</button>

            </div>

          </div>
        </div>
      </div>
    );
}

export default Modal;
