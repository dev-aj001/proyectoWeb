// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvwYX0AX7V1jCygsiuktfH59QAFfBvTZU",
  authDomain: "critichub-27650.firebaseapp.com",
  projectId: "critichub-27650",
  storageBucket: "critichub-27650.appspot.com",
  messagingSenderId: "316576317047",
  appId: "1:316576317047:web:9bb4749d2af711d8769072",
  measurementId: "G-ZLT30NQGXY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);