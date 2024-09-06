// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu8usWRHf9XOMoE570tFnUbyslkRne8Bs",
  authDomain: "testlogin-abcf3.firebaseapp.com",
  projectId: "testlogin-abcf3",
  storageBucket: "testlogin-abcf3.appspot.com",
  messagingSenderId: "1011637763862",
  appId: "1:1011637763862:web:683d5225582306f80e5a37"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);