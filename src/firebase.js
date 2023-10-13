// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN8Ean0kRNLPRsvOilcgLGaDuROTdMqyM",
  authDomain: "react-dragon-news-auth-4b536.firebaseapp.com",
  projectId: "react-dragon-news-auth-4b536",
  storageBucket: "react-dragon-news-auth-4b536.appspot.com",
  messagingSenderId: "16353753672",
  appId: "1:16353753672:web:1aa93a6c415f5c7a4b367d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;