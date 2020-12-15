import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import reportWebVitals from "./reportWebVitals";
var firebaseConfig = {
  apiKey: "AIzaSyCFPK01XcrMy8j1hO4Gg_S-jWe2SCeE4NE",
  authDomain: "newchat-622a3.firebaseapp.com",
  databaseURL: "https://newchat-622a3.firebaseio.com",
  projectId: "newchat-622a3",
  storageBucket: "newchat-622a3.appspot.com",
  messagingSenderId: "65370138070",
  appId: "1:65370138070:web:752b1564d6d4d5a60cf077",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
