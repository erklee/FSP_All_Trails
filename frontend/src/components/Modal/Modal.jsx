import { useState } from "react";
import * as modalActions from "../../store/modal"
import * as reviewActions from "../../store/review"
import { useDispatch, useSelector} from "react-redux"
import Ratings from "../Ratings/Ratings";
import "./Modal.css"


function Modal({ trail }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const currentUser = useSelector((state) => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: {
        user_id: currentUser.id,
        trail_id: trail.id,
        review: review,
        rating: rating
      }
    }
    await dispatch(reviewActions.createReview(newReview));
    await dispatch(reviewActions.fetchReviews());
    dispatch(modalActions.hideModal("createReview"))
  }

  const handleModalClose = (e) => {
    e.preventDefault()
    dispatch(modalActions.hideModal("createReview"))
  }

    return (
      <div id="modal">
        <div id="modal-background" />
        <div id="modal-content">
          <p onClick={handleModalClose}></p>
          <p>{trail?.name}</p>
          <Ratings rating={rating} setRating={setRating} />
          <textarea name="reviewform" id="review" placeholder="Type review" type="textarea" 
          maxLength="10000" value={review} onChange={e => setReview(e.target.value)}></textarea>
          <button id="modal-submit-button"
          onClick={handleSubmit} type="submit">SUBMIT</button>
        </div>
      </div>
    );
}

export default Modal;
