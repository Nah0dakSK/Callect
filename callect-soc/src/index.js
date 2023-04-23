import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain = "dev-gym4r5w0rb3run7u.us.auth0.com"
      clientId = "2y6bayhnWvmolFpF9mpHzh1XOaIry6lq" 
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
