import React, {useContext} from 'react'
import { DisplayContext } from "./DisplayContext";

export default function Intro() {
  const {setDisplay} = useContext(DisplayContext)


  const handleClick = (toShow) => {
    setDisplay(toShow);
  }

  return (
    <div className="landing-card">
      <div className="title">
        SWRMHUB
        <p>local</p>  
      </div>
      <div className="content">
        <h4>Welcome to your local hub</h4>
        <p>
          SWRMHUB local is the interface for your local robot swarm project. If this is your first time through, please register using the code on the top of your hub. Otherwise, click the login button below.
        </p>
      </div>
      <div className="landing-card-nav">
        <button className="login-btn" onClick={() => { handleClick("login") }}>Login</button>
        <button className="register-btn" onClick={() => { handleClick("register") }}>Register</button>
      </div>
    </div>
  )
}
