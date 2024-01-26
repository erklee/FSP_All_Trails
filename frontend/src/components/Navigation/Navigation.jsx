import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"
import sometrailsicon from '../../../images/sometrailsicon.png'
import gitIcon from "../../../images/git-30.png"
import linkedIn from "../../../images/linked30.png"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const demoLogin = (e) => {
      e.preventDefault()
      dispatch(sessionActions.login({credential:'Demo-lition', password:"password"}));
  };

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
        <div className='innerNavLink'>
      
          <button onClick={demoLogin} id='demologin'>Demo Login</button>
          
          <NavLink to="/login" className="navlogin">Log In</NavLink>
        </div>
        </>
      );
    }
  
    return (
      <>
        <nav>
          <div className='navlinks'>
              <NavLink to="/" id='home' className='home-link'>
                <img src={sometrailsicon} alt="sometrailsicon" id='homeicon' />
              SomeTrails</NavLink>
              <div className='linked-in'>
              <a href="https://www.linkedin.com/">
                  <img src={linkedIn} alt="" />
                </a>
              </div>
              <div className='git'>
                <a href="https://github.com/erklee">
                  <img src={gitIcon} alt="" />
                </a>
              </div>
              {sessionLinks}
          </div>

        </nav>
      </>
    );
  }
  
  export default Navigation;