
import { useSelector } from 'react-redux'
import Rating from './RatingsStatic'
import './AvgRatingReview.css'

function AverageRatingReview({ trail }) {
    const reviews = useSelector(state => Object.values(state?.review || {}))

    const allreviews = reviews?.filter(review => review?.trailId === trail?.id)

    const ratingsum = allreviews.reduce((sum, review) => sum + review.rating, 0)

    const average = ratingsum / allreviews.length
    
    return (
        <>
            <div>
                <h3 id="rating-review">{average.toFixed(1)}</h3>
                <h3 id="average-rating-review">Average Rating</h3>
                <Rating rating={average.toFixed(1)} id='rating-review-stars'/>
                <h3 id="review-number">{allreviews.length} Reviews</h3>
                <table class="star-ratings-table">

                    <tbody>
                        <tr>
                            <td>5 &#9733;</td>
                            <td>10</td> 
                        </tr>
                        <tr>
                            <td>4 &#9733;</td>
                            <td>7</td> 
                        </tr>
                        <tr>
                            <td>3 &#9733;</td>
                            <td>5</td> 
                        </tr>
                        <tr>
                            <td>2 &#9733;</td>
                            <td>2</td> 
                        </tr>
                        <tr>
                            <td>1 &#9733;</td>
                            <td>1</td> 
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AverageRatingReview