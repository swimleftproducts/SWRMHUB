import './index.css';
//import { DisplayContext } from './components/DisplayContext';
import { AuthContext } from './components/AuthContext';

import React, {  useContext, useEffect } from 'react';


function App() {
  const { auth, setAuth, getLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    //getLoginStatus();
  }, []);

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
