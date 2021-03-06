import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Takes in an element and an element to put it in
ReactDOM.render(
  <React.StrictMode>
    <App style={{height: "100%"}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
