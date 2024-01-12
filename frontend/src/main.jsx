import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store';
import  csrfFetch ,{restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session'


const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  window.restoreCSRF = restoreCSRF
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions
}
restoreCSRF()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);