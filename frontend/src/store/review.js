import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews)=>{
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) =>{
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}


export const selectReview = (reviewId) => (state) => {
    return state?.review[reviewId] || null
}

export const selectReviewsArray = (state) => Object.values(state.reviews)

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch(`/api/reviews`)

    if (res.ok) {
        const reviews = await res.json()
        dispatch(receiveReviews(reviews))
    }
}

export const createReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (res.ok) {
        const {review} = await res.json()
        dispatch(receiveReview(review))
    } else {
        console.log("review is less than 3 characters")
    }
}

export const updateReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PUT",
        body: JSON.stringify({review: review }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {
        const {review} = await res.json()
        dispatch(receiveReview(review))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "delete"
    })

    if (res.ok) {
        dispatch(removeReview(reviewId))
    }
}

const ReviewsReducer = (state = {}, action) => {
    let newState = {...state}

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews}
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default ReviewsReducer