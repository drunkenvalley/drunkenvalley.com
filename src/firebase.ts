// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnSu4hqbs6jFAzFrlhVAUm-0FNu0Sqcqc",
  authDomain: "dulcet-palace-268221.firebaseapp.com",
  projectId: "dulcet-palace-268221",
  storageBucket: "dulcet-palace-268221.appspot.com",
  messagingSenderId: "360712073555",
  appId: "1:360712073555:web:5aa583f5d1618f917f71a6",
  measurementId: "G-L04WMBW2BP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default { app, analytics }