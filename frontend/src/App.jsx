//app.jsx 
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignUpForm';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';
import TrailsIndex from './components/Trails/Trailsindex';
import TrailsShow from './components/Trails/TrailsShow'
// import "./reset.css"

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TrailsIndex />
      },
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "signup",
        element: <SignupForm />
      },
      {
        path: "trails/:trailId",
        element: <TrailsShow/>
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;