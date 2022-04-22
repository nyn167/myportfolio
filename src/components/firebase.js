import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaW5oxkBA60Gy9dSYhbsfC6VoHWYs7sGM",
  authDomain: "myportfolio-49a4a.firebaseapp.com",
  projectId: "myportfolio-49a4a",
  storageBucket: "myportfolio-49a4a.appspot.com",
  messagingSenderId: "677710678664",
  appId: "1:677710678664:web:8c0d7c728ee312e1a5ed3d",
  measurementId: "G-TYBDJB578N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
