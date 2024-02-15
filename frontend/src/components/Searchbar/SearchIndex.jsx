import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrails } from "../../store/trail";
import { fetchReviews } from "../../store/review";
import SearchIndexItem from "./SearchIndexItem";


function SearchIndex() {
    const dispatch = useDispatch()

    const results = useSelector(state => Object.values(state?.search.search || {}))
    useEffect(() => {
        dispatch(fetchTrails())
        dispatch(fetchReviews())
    }, [dispatch]);
    console.log(results)


    return (
        <>

            {/* <div className="search-index"> */}
                {results?.map((result) => (
                    <SearchIndexItem result={result} key={result.id}/>
                )
            )}
        </>
    )



}

export default SearchIndex