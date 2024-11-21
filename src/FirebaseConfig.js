// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import for Realtime Database


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArOW306ZEtZFn1Jx6Rk2aCiRv4aZfpm2E",
    authDomain: "personalwebcv-dc75c.firebaseapp.com",
    databaseURL: "https://personalwebcv-dc75c-default-rtdb.firebaseio.com",
    projectId: "personalwebcv-dc75c",
    storageBucket: "personalwebcv-dc75c.firebasestorage.app",
    messagingSenderId: "385755843812",
    appId: "1:385755843812:web:dc0e4d1a945279aa2a70f1"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database
const db = getDatabase(app); // Adding initialization for Realtime Database

// Export the app and other required objects
export { app, analytics, db };
