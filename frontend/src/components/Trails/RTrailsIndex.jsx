import { useDispatch, useSelector } from "react-redux";
import { fetchTrails } from "../../store/trail";
import { useEffect, useState } from "react";
import TrailsIndexItem from "./TrailsIndexItem";
import { trailsArray } from "../../store/trail";
import TrailsMapWrapper from "../Maps/TrailsMaps";
import './rTrailsIndex.css'

function RTrailsIndex() {
    const trails = useSelector(trailsArray);
    const dispatch = useDispatch();
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        dispatch(fetchTrails())
    }, [dispatch]);

    return (
        <>
            <div id="realTrailIndexHeader"></div>
                <div id="realindexWrapper" className={isSidebarOpen ? "sidebaropen" : "sidebarclose"}>
            
            <div id="sidebar" className={isSidebarOpen ? "open" : "close"}>
                <div id="sidebarHeader"> 
                    <h1>Curated Trails</h1>
                </div>
                
                <div>
                {trails.map((trail) => (
                    <TrailsIndexItem key={trail.id} trail={trail} />
                ))}
                </div>
            </div>
            <div id="openSideBar" onClick={toggleSidebar}>
                <p id="textsidebaropener">{isSidebarOpen ? "<" : ">"}</p>
            </div>
                    <TrailsMapWrapper key={"map"} trails={trails} />
            </div>
            <footer className="realtrailindexfooter">

            </footer>
    </>
    )
}

export default RTrailsIndex