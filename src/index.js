import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // creates the main entry point for the application by using a element in the a html file in public/index.html
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
); // tells the root component what to render in public/index.html

