// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY3uFrZPR4obNoKPa5iIWb6dRrIHUPjx8",
  authDomain: "finoplano-538c8.firebaseapp.com",
  projectId: "finoplano-538c8",
  storageBucket: "finoplano-538c8.appspot.com",
  messagingSenderId: "509949558227",
  appId: "1:509949558227:web:e4358c6c545a9f08140326",
  measurementId: "G-42P9LGE5QL"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);