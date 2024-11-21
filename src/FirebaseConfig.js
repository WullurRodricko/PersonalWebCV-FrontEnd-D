// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
