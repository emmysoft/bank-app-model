// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { FIREBASE_API } from "./util/api";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API,
    authDomain: "nudabank.firebaseapp.com",
    projectId: "nudabank",
    storageBucket: "nudabank.appspot.com",
    messagingSenderId: "452708396477",
    appId: "1:452708396477:web:d20b6d45bccdacb645b6d4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);