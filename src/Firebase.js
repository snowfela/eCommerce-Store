// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFlA1L576YdczN8ATK24_ob1eZHvXj24",
  authDomain: "e-commerce-store-bb782.firebaseapp.com",
  projectId: "e-commerce-store-bb782",
  storageBucket: "e-commerce-store-bb782.appspot.com", // FIXED: ".app" is incorrect
  messagingSenderId: "619623905115",
  appId: "1:619623905115:web:19854ce088276ff2b24c7e",
  measurementId: "G-JGXFQ2W5HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firebase services
export { app, auth, db, analytics };
