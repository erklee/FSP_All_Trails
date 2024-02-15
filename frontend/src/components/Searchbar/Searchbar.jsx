import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTrailSearch } from "../../store/search"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Searchbar(){
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    // const currentUser = useSelector(state => state?.session.user)

    const handleSearch = () => {
        if (search.trim() !== '') {
            dispatch(fetchTrailSearch(search))
            // navigate("/trails/search");
        }
    }

    return (
        <>
            <div className="search-bar">
                <input 
                type="text" 
                placeholder="Search trails..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                />
                {/* <button onClick={handleSearch}>Search</button> */}
                <Link to="/trails/search" id="searchBarButton"><button onClick={handleSearch} >SEARCH</button></Link>
            </div>
        </>
    )
}


export default Searchbar