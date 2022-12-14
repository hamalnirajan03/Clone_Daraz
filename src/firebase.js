// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC4mIUbNa2KYSsNL7SosK84snGVNfGdiJY",
    authDomain: "onlineshopping-84e48.firebaseapp.com",
    projectId: "onlineshopping-84e48",
    storageBucket: "onlineshopping-84e48.appspot.com",
    messagingSenderId: "573476770199",
    appId: "1:573476770199:web:9afb239a90061cce9db4d2",
    measurementId: "G-9SK78NV1NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };