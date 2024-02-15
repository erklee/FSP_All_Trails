import { useDispatch, useSelector } from "react-redux";
import { fetchTrails } from "../../store/trail";
import { useEffect, useState } from "react";
import TrailsIndexItem from "./TrailsIndexItem";
import { trailsArray } from "../../store/trail";
import TrailsMapWrapper from "../Maps/TrailsMaps";
import './rTrailsIndex.css'
import closeArrow from "../../../images/close-arrow.png"
import openArrow from "../../../images/open-arrow.png"
import { fetchReviews } from "../../store/review";

function RTrailsIndex() {
    const trails = useSelector(trailsArray);
    const dispatch = useDispatch();
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        dispatch(fetchReviews())
        dispatch(fetchTrails())
    }, [dispatch]);

    return (
        <>
            <div id="real-trail-index-header"></div>
                <div id="realindexWrapper" className={isSidebarOpen ? "sidebaropen" : "sidebarclose"}>
            
            <div id="sidebar" className={isSidebarOpen ? "open" : "close"}>
                <div id="sidebar-header"> 
                    <h1>Curated Trails</h1>
                </div>
                
                <div>
                {trails.map((trail) => (
                    <TrailsIndexItem key={trail.id} trail={trail} />
                ))}
                </div>
            </div>
            <div id="openSideBar" onClick={toggleSidebar}>
                <p id="textsidebaropener">{isSidebarOpen ? <img src={closeArrow} alt="close" /> : <img src={openArrow} alt="open" /> }</p>
            </div>
                    <TrailsMapWrapper key={"map"} trails={trails} />
            </div>
            <footer className="real-trail-index-footer">



            </footer>
    </>
    )
}

export default RTrailsIndex