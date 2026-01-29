// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCBjzWiwidtx6vZMTKop_8jhmEtwJS5cg",
  authDomain: "erickalmeida-portfolio.firebaseapp.com",
  projectId: "erickalmeida-portfolio",
  storageBucket: "erickalmeida-portfolio.firebasestorage.app",
  messagingSenderId: "459476944896",
  appId: "1:459476944896:web:061783dd998efa148770e5",
  measurementId: "G-MMBTCDD3M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);