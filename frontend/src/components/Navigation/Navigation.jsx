import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"
import sometrailsicon from '../../../images/sometrailsicon.png'


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const demoLogin = (e) => {
      e.preventDefault()
      dispatch(sessionActions.login({credential:'demo@user.io', password:"password"}));
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
      
          <button onClick={demoLogin} id='demologin'>Try the Demo Login+</button>
          
          <NavLink to="/login" className="navlogin">Log In</NavLink>
        </div>
        </>
      );
    }
  
    return (
      <>
        <nav>
          <div className='navlinks'>
            <div className='primary-nav'>

              <NavLink to="/" id='home' className='home-link'>
                <img src={sometrailsicon} alt="sometrailsicon" id='homeicon' />
              SomeTrails</NavLink>
              <div className='social-links'>

                <a href="https://github.com/erklee" id='github-nav'>Github</a>
                <a href="https://www.linkedin.com/in/eric-lee-0184aa1a2/" id='linkedin-nav'>LinkedIn</a>
                <a href="https://erklee.github.io/Portfolio/" id='portfolio-nav'>Portfolio</a>
              </div>
            </div>
              <div className='session-links'>
                {sessionLinks}
              </div>
          </div>

        </nav>
      </>
    );
  }
  
  export default Navigation;