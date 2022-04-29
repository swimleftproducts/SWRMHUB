import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './components/AuthContext'
import {DisplayProvider} from './components/DisplayContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DisplayProvider>
  </React.StrictMode>
);
