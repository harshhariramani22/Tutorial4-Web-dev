import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import PathRouter from './PathRouter';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
   <PathRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);


/*
Code references:

https://www.npmjs.com/package/react-router-dom 
https://stackoverflow.com/questions/48847885/module-not-found-cant-resolve-bootstrap-dist-css-bootstrap-theme-css-in-c

*/

