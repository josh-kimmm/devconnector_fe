import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Ugly way to use proxy requests used by axios. Might want to consider moving this to a 
// config file or something in the future. Maybe this file becomes config for future? 
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000/"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
