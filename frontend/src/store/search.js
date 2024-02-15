import csrfFetch from "./csrf";

export const RECIEVE_TRAILS = 'search/RECIEVE_TRAILS'

export const recieveTrails = (trails) => ({
    type: RECIEVE_TRAILS,
    trails
})

export const fetchTrailSearch = (search) => async dispatch => {
    const res = await csrfFetch(`/api/trails/search?query=${search}`)

    if (res.ok){
        const trails = await res.json()

        dispatch(recieveTrails(trails))
        return trails
    }
}

const searchreducer = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_TRAILS:
            return {...action.trails}
        default:
            return state
    }
}
export default searchreducer