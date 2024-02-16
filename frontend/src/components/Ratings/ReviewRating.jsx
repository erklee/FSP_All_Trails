import { useSelector } from "react-redux";
import Ratings from "./Ratings";
import './ReviewRatings.css'

function ReviewRatings({ trail }) {
    const reviews = useSelector((state) => Object.values(state?.review || {}))
    const allreviews = reviews.filter((review) => review?.trail_id === trail?.id)

    if (allreviews.length === 0) {
        return (
            <h1>No reviews yet! Be the first to make one!</h1>
        )
    }

    const ratingsum = allreviews.reduce((sum, review) => sum + review.rating, 0);

    const average = ratingsum / allreviews.length

    return (
        <>
            <Ratings rating={average.toFixed(1)} />
        </>
    )
}

export default ReviewRatings