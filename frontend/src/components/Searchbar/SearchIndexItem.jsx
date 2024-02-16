import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './SearchIndexItem.css'
import AvgRating from "../Ratings/AvgRating";



function SearchIndexItem({ result }) {


    return (

        <div className="search-item">
            <Link to={`/trails/${result.id}`}>
                <img src={result?.photoUrl} alt={result?.name} className="search-item-image" />
            </Link>
            <h1 className="search-item-title"></h1>
            <p className="search-item-name">{result?.name}</p>
            <p>&#9733; <AvgRating trail={result}/> &bull; {result.length}mi &bull; {result.difficulty}</p>

        </div>
    );
}

export default SearchIndexItem