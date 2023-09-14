import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC7LoY3FHo42FOz9l_eHkIMdP3eZ2pjtng",
  authDomain: "ait-eventhub.firebaseapp.com",
  projectId: "ait-eventhub",
  storageBucket: "ait-eventhub.appspot.com",
  messagingSenderId: "1017034945384",
  appId: "1:1017034945384:web:57e16a2a483937563a1cdd",
  measurementId: "G-HMSD82SPTC"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

