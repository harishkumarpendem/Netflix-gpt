// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFEhEVcb4YTDqMmJQXP8U7_psGFONtEbM",
  authDomain: "netflix-gpt-13107.firebaseapp.com",
  projectId: "netflix-gpt-13107",
  storageBucket: "netflix-gpt-13107.appspot.com",
  messagingSenderId: "294595255513",
  appId: "1:294595255513:web:876181c2dd5d6f655232c8",
  measurementId: "G-54YESSELZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);