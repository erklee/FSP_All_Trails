import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import "./LoginForm.css"

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
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

  return (
    <>
      <div className='outside'>
        <form onSubmit={handleSubmit} className='login'>
          <br />
          <br />
        <h1 id='header'> Welcome back. </h1>
        <h1 id='header1'>Log in and start exploring.</h1>
          <ul id='loginerrors'>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
            <br />
            <br />
            <br />
            <input
              id='username'
              type="text"
              value={credential}
              placeholder="Username or Email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />

          <br />
            <input
              type="password"
              id='password'
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <br />
          <br />

          <button type="submit" id='button'>Log In</button>
          <br />
          <p>Dont have an account? <NavLink to="/signup">Sign Up</NavLink> </p> 
        </form>
      </div>
    
    <div className='loginfooter'>
    

    </div>
    </>

  );
}

export default LoginForm;