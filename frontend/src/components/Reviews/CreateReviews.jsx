import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal"
import "./CreateReviews.css"
import * as modalActions from "../../store/modal";

function CreateReview({ trail }) {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modals.createReview)

    const handleModalShow = (e) => {
        e.preventDefault()
        dispatch(modalActions.showModal("createReview"))
    }

    return (
        <>
            <div className="create-review-wrapper">
                <div id="create-review-modal">
                {showModal && 
                <Modal key={trail?.id} trail={trail}/>}
                    
                </div>
            <p id="create-review-button" onClick={handleModalShow}> <p id="write-review-button">Write Review</p></p>
            </div>
        </>
    )
}

export default CreateReview