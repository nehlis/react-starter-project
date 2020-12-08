import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './Toggle'
import reportWebVitals from './reportWebVitals';
import Buttons from "./LikeButton";

ReactDOM.render(
  <React.StrictMode>
    <Toggle title={'Toggle mij'} id={'2323'}/>
    <Buttons />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
