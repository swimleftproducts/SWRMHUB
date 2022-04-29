import React, { useState, createContext } from 'react';
export const DisplayContext = createContext();

export const DisplayProvider = (props) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const setDisplay =(toShow) => {
    switch (toShow){
      case "login":
        setShowIntro(false);
        setShowLogin(true);
        setShowRegister(false);
        break
      case "register":
        setShowIntro(false);
        setShowLogin(false);
        setShowRegister(true);
        break
      default:
        setShowIntro(true);
        setShowLogin(false);
        setShowRegister(false);
    }
  }


  return (
    <DisplayContext.Provider value={{setDisplay,showIntro, showLogin, showRegister }}>
      {props.children}
    </DisplayContext.Provider>
  );
};
