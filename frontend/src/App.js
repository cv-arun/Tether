import React from 'react'

import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProtectedRoutes from './routes.js/protectedRoutes';
import UnprotectedRoutes from './routes.js/unprotectedRoutes';



function App() {

  return (
    <GoogleOAuthProvider clientId="180289980522-fpgd0r0agiea9bmmko725thq7tha7bu2.apps.googleusercontent.com">
      <ProtectedRoutes/>
      <UnprotectedRoutes/>
     
    </GoogleOAuthProvider>
  );
}

export default App;
