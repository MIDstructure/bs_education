import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';
import './../sass/app.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


ReactDOM.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
  document.getElementById('root')
)