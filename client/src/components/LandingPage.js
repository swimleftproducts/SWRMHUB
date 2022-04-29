import React, {  useContext, useEffect } from 'react';
import { DisplayContext } from "./DisplayContext";
import Intro from './Intro'
import Register from './Register'
import Login from './Login'

export default function 
LandingPage() {
  useEffect(() => { },[])

  const {showIntro, showLogin, showRegister } = useContext(DisplayContext);
  return (
    <div className="landing-page">
      {showIntro?<Intro/>:null}
      {showLogin?<Login/>:null}
      {showRegister?<Register/>:null}
    </div>
  )
}
