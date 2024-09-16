// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "krelli-3b6ea.firebaseapp.com",
  projectId: "krelli-3b6ea",
  storageBucket: "krelli-3b6ea.appspot.com",
  messagingSenderId: "240657544876",
  appId: "1:240657544876:web:146a6c11a863f4c0ead109",
  measurementId: "G-KK6SD4B0Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app ,analytics};
