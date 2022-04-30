import React, { useState } from 'react';

export default function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hubId, setHubId] = useState('1');
  const [message, setMessage] = useState('err');
  const [nameMessage, setNameMessage] = useState('err');
  const [emailMessage, setEmailMessage] = useState('err');
  const [passwordMessage, setPasswordMessage] = useState('err');

  const onSubmit = () => {};

  return (
    <div className="landing-card">
      <div className="title">
        SWRMHUB
        <p>local</p>
      </div>

      <div className="form-outline mb-0">
        <label className="form-label m-0" htmlFor="email">
          First Name
        </label>
        <input
          type="email"
          id="name"
          className="form-control form-control-lg"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {nameMessage ? (
          <p className="error-text mb-0">{nameMessage}</p>
        ) : (
          <p className="error-text mb-0"></p>
        )}
      </div>

      <div className="form-outline">
        <label className="form-label m-0 " htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control form-control-lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailMessage ? (
          <p className="error-text mb-0">{emailMessage}</p>
        ) : (
          <p className="error-text mb-0"></p>
        )}
      </div>

      <div className="form-outline ">
        <label className="form-label m-0" htmlFor="hubId">
          Id # on top of Hub
        </label>
        <input
          type="text"
          id="id"
          className="form-control form-control-lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailMessage ? (
          <p className="error-text mb-0">{}</p>
        ) : (
          <p className="error-text mb-0"></p>
        )}
      </div>

      <div className="form-outline mb-1 ">
        <label className="form-label p-0 m-0" htmlFor="typePasswordX-2">
          Password
        </label>
        <input
          type="password"
          id="typePasswordX-2"
          className="form-control form-control-lg"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {passwordMessage ? (
          <p className="error-text mb-0">{passwordMessage}</p>
        ) : ( 
          <p className="error-text mb-0"></p>
        )}
      </div>

      <button
        className=""
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        Sign Up
      </button>
      {message ? <p className="error-text">{message}</p> : null}
    </div>
  );
}
