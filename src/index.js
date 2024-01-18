import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const express = require('express');
//const morgan = require ('morgan');

//const app = express();

//app.use(morgan('dev'))

//app.listen(4000)
//console.log('Server on port 4000')

