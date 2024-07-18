// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7pmmMBvGapHXQpnEdeuX-eCsL7-dWra8",
  authDomain: "netflixgpt-1ef29.firebaseapp.com",
  projectId: "netflixgpt-1ef29",
  storageBucket: "netflixgpt-1ef29.appspot.com",
  messagingSenderId: "978514629358",
  appId: "1:978514629358:web:0cf8de75652c14ebb959ff",
  measurementId: "G-V7FW88BQ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();