// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoR7weBgb7XExEOgWWKst0q6a2YI1rBEc",
  authDomain: "bugitech-a4bb7.firebaseapp.com",
  projectId: "bugitech-a4bb7",
  storageBucket: "bugitech-a4bb7.firebasestorage.app",
  messagingSenderId: "3811323594",
  appId: "1:3811323594:web:9fd33aaf896460996a0e33",
  measurementId: "G-EPC6BYJRSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getAnalytics(app);
