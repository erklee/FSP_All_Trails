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
              <NavLink to="/" id='home' className='home-link'>
                <img src={sometrailsicon} alt="sometrailsicon" id='homeicon' />
              SomeTrails</NavLink>
              {sessionLinks}
          </div>
          <a href="https://github.com/erklee">Github</a>
          <a href="https://www.linkedin.com/in/eric-lee-0184aa1a2/">LinkedIn</a>
          <a href="https://erklee.github.io/Portfolio/">Portfolio</a>

        </nav>
      </>
    );
  }
  
  export default Navigation;