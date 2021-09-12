import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app-base.css';
import './@fake-db';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
