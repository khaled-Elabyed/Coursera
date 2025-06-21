// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9riyBIqayWhqoz3Ryaz3l6HXhJlMyMxE",
  authDomain: "coursera-81e53.firebaseapp.com",
  projectId: "coursera-81e53",
  storageBucket: "coursera-81e53.firebasestorage.app",
  messagingSenderId: "345791912275",
  appId: "1:345791912275:web:f2a890993ac990f17269a6",
  measurementId: "G-FNJD5C94N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics ;