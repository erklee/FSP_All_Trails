import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReviewsIndexItem from "./ReviewsIndexItem";


function ReviewsIndex({ trail }) {
    const { trailId } = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state?.review || {}))

    useEffect(() => {
        dispatch(fetchReviews())
    },[dispatch])

    return (
        <>
            {reviews.reverse().filter(ele => ele.trailId == trailId).map((review) => (
                <ReviewsIndexItem key={review?.id} review ={review} trail={trail}/>
            ))}
        </>
    )
}

export default ReviewsIndex