// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUslIEAX34VsjZDmuX0sunVLRjVA-pJUA",
  authDomain: "netflixgpt-1281.firebaseapp.com",
  projectId: "netflixgpt-1281",
  storageBucket: "netflixgpt-1281.appspot.com",
  messagingSenderId: "13626277885",
  appId: "1:13626277885:web:2bd72a84c6d5e5542ae394",
  measurementId: "G-87JWCCW841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();