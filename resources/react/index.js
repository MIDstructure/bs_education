import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';
import './../sass/app.scss';


ReactDOM.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>,
  document.getElementById('root')
)