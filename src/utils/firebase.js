// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgv6Y_0JCFnz7fYXjm8d5768Ue2KffKt0",
    authDomain: "watchwonders.firebaseapp.com",
    projectId: "watchwonders",
    storageBucket: "watchwonders.appspot.com",
    messagingSenderId: "1016921842585",
    appId: "1:1016921842585:web:f42e4431cb5c7f0e412908",
    measurementId: "G-90E3Y4KTQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
