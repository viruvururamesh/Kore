import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css'

import {Provider} from 'react-redux'
import store from './redux/store'
let logineddata=sessionStorage.getItem('logineduser');
  let isLoggedIn;
if(logineddata===null){
  isLoggedIn=false;
}
else {
  isLoggedIn=true;
}
console.log(isLoggedIn)
ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
