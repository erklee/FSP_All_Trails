import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const demoLogin = (e) => {
      e.preventDefault()
      dispatch(sessionActions.login({credential:'eric@gmail.com', password:"password"}));
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
          <div className='links'>
              <NavLink to="/" id='home'>SomeTrails</NavLink>
              {sessionLinks}
          </div>

        </nav>
      </>
    );
  }
  
  export default Navigation;