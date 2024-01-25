import './TrailsIndexItem.css'
import { Link } from 'react-router-dom'
import hempstead from '../../../images/hempsteadstatepark.webp'
import { useSelector } from 'react-redux'  

function TrailsIndexItem({trail}){

    const currentUser = useSelector(state=> state?.session.user)

    return (
        <div>

            <div id='trailWrapperInfo'>
                <ul id='ultrailitemindex'>
                    <Link to={ currentUser ? `/trails/${trail.id}`: '/signUp' }><img src= {trail.photoUrl} alt="trail" id="trailimage"/></Link>
                    
                    <Link to={currentUser? `/trails/${trail.id}`: '/signUp'} style={{ textDecoration: 'none' }}>
                        <p id='hometrailname'>{trail.name}</p>
                        <ul id='splashpageTrail'> 
                        <li>&#9733; 4.3 &bull; {trail.length}mi &bull; {trail.difficulty}</li>
                        </ul>
                    </Link>
                </ul>
            </div>
            <div className='splashfooter'></div>
        </div>
    )
}

export default TrailsIndexItem