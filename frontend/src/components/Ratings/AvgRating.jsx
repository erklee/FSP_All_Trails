import {  useSelector } from "react-redux";


function AvgRating({ trail }) {
    const reviews = useSelector((state) => Object.values(state?.review || {}))
    const allreviews = reviews.filter((review) => review?.trailId === trail?.id)

    if (allreviews.length === 0) {
        return (
            <h1>No reviews yet! Be the first to make one!</h1>
        )
    };

    const ratingsum = allreviews.reduce((sum, review) => sum + review.rating, 0)

    const average = ratingsum / allreviews.length

    return average.toFixed(1)
}

export default AvgRating