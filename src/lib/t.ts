// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3hQiWCpmzEVrhRJIif5o7wf_i_Jh18f0",
  authDomain: "explearn-af4a5.firebaseapp.com",
  projectId: "explearn-af4a5",
  storageBucket: "explearn-af4a5.firebasestorage.app",
  messagingSenderId: "550890222349",
  appId: "1:550890222349:web:8a7c80a7d26b957e3eb644",
  measurementId: "G-07PSY6VSWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);