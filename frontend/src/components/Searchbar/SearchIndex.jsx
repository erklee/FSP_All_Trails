import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrails } from "../../store/trail";
import { fetchReviews } from "../../store/review";
import SearchIndexItem from "./SearchIndexItem";
import "./SearchIndex.css"
import Footer from "../Navigation/Footer";


function SearchIndex() {
    const dispatch = useDispatch()

    const results = useSelector(state => Object.values(state?.search.search || {}))
    useEffect(() => {
        dispatch(fetchTrails())
        dispatch(fetchReviews())
    }, [dispatch]);

    // if (results?.length) {
    //     return (
            
    //     )
    // }

    return (
        <>
            <div>
                <div className="search-index-header">
                    Search Results: <span id="number">{results?.length}</span>
                </div>
                    <div className="parent-search-index">
                        {results?.map((result) => (
                            <SearchIndexItem result={result} key={result.id}/>
                        )
                    )}

                    </div>
                <div id="search-index-footer"></div>
            </div>
            <Footer/>
        </>
    )


}

export default SearchIndex