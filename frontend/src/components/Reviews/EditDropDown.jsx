import ModalEdit from "../Modal/ModalEdit"
import * as reviewActions from "../../store/review"
import * as modalActions from "../../store/modal"
import { useDispatch, useSelector } from "react-redux"
import "./EditDropDown.css"

function ReviewDropDown ({review, trail, visible, setVisible}) {
    const dispatch = useDispatch()
    const edit = useSelector(state => state.modals.editReview)

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(review.id))
        setVisible(!visible)
    }

    const handleModalShow = (e) => {
        e.preventDefault()
        dispatch(modalActions.showModal("editReview"))
    }
    
    return (
        <div>
            <div className="edit-modal-parent">
                {edit && <ModalEdit review={review} trail={trail} visible={visible} setVisible={setVisible}/>}
            </div>
            <div className="edit-drop-down">
                <p id="edit-review-click" onClick={handleModalShow}>Edit</p>
                <p id="delete-review-click" onClick={handleDelete}>Delete</p>
            </div>
        </div>
    )
}


export default ReviewDropDown