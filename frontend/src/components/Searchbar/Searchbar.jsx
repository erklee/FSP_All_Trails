import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTrailSearch } from "../../store/search"
import { useNavigate } from "react-router-dom"


function Searchbar(){
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const currentUser = useSelector(state => state?.session.user)

    const handleSearch = () => {
        if (search.trim() !== '') {
            dispatch(fetchTrailSearch(search))
        }
    }

    return (
        <>
            <div className="search-bar">
                <div className="Welcome"></div>
            </div>
        </>
    )
}


export default Searchbar