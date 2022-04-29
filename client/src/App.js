import './index.css';
//import { DisplayContext } from './components/DisplayContext';
import { AuthContext } from './components/AuthContext';
import React, {  useContext, useEffect } from 'react';

import LandingPage from "./components/LandingPage"
import HomePage from './components/HomePage'

function App() {
  const { auth, getLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <div className="App">
      {!auth.authenticated?<LandingPage/>:<HomePage/>}
    </div>
  );
}

export default App;
