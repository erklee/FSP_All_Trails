import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import sometrailsicon from '../../../images/sometrailsicon.png'
import Footer from '../Navigation/Footer';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true}/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoLogin = (e) => {
    e.preventDefault()
    dispatch(sessionActions.login({credential:'demo@user.io', password:"password"}));
  };

  return (
    <>
      <div className='signup'>
        <form onSubmit={handleSubmit} className='signupform'>
          <br />
          <br />
        <div>
          <img src={sometrailsicon} id='signupicon' />
        </div>
          <br />
          <h1 id='signupHeader'> Sign up today to start planning your next adventure</h1>
          <br />
          <br />
            <input
              type="text"
              value={email}
              placeholder='Email'
              id='signUpEmail'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              value={username}
              placeholder='Username'
              id='signupUsername'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder='Password'
              id='signupPassword'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              id='signupConfirmPassword'
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <ul className='signupErrors'>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <br />
          <button type="submit" id='signupButton'>Sign Up</button>
          <br />
          <button onClick={demoLogin} id='signup-demo-login'>Try a Demo!</button>
          <br />
          <p>Already have an account? <NavLink to="/login">Log In</NavLink></p> 
          <br />
        </form>
        </div>
        {/* <div className='signupfooter'></div> */}
        
          
      <Footer/>
    </>
  );
}

export default SignupForm;