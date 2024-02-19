
import { useSelector } from 'react-redux'
import Rating from './RatingsStatic'
import './AvgRatingReview.css'

function AverageRatingReview({ trail }) {
    const reviews = useSelector(state => Object.values(state?.review || {}))

    const allreviews = reviews?.filter(review => review?.trailId === trail?.id)

    const ratingsum = allreviews.reduce((sum, review) => sum + review.rating, 0)

    const average = ratingsum / allreviews.length

    function dynamicRatingDistribution( reviews ) {
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        reviews.forEach(review => {
            if (review.rating >= 1 && review.rating <= 5) {
                distribution[review.rating]++;
            }
        });
    
        return distribution;
    }

    const ratingDistribution = dynamicRatingDistribution(allreviews)
    
    return (
        <>
            {/* <div>
                <h3 id="rating-review">{average.toFixed(1)}</h3>
                <h3 id="average-rating-review">Average Rating</h3>
                <Rating rating={average.toFixed(1)} id='rating-review-stars'/>
                <h3 id="review-number">{allreviews.length} Reviews</h3>

                <tbody>
                    {Object.entries(ratingDistribution).map(([star, count]) => (
                        <tr key={star}>
                            <td id='tr-star'>{star} &#9733;</td>
                            <td>{count}</td>
                        </tr>
                    ))}
                </tbody>

            </div> */}

            <div className='parent-average-rating-review'>
                <div id='avg-rating-review-parent'>

                    <h3 id="rating-review">{average.toFixed(1)}</h3>
                    <h3 id="average-rating-review">Average Rating</h3>
                    <div id='rating-component-review'>

                        <Rating rating={average.toFixed(1)} />
                    </div>
                    <h3 id="review-number">{allreviews.length} Reviews</h3>
                </div>

                <div id='rating-distribution'>
                    {Object.entries(ratingDistribution).reverse().map(([star, count]) => (
                        <div key={star} className="rating-bar-container">
                            <span id='span-number'>{star} </span>
                            <span id='span-star'>&#9733;</span>
                            <div className="rating-bar" style={{ width: `${count * 10}%` }}></div> {/* Adjust the multiplier as needed */}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AverageRatingReview