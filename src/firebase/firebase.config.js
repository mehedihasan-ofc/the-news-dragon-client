// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTAnRxdCp1VhzunO7MTZ5UZxm8tzJYGQY",
    authDomain: "the-news-dragon-aa631.firebaseapp.com",
    projectId: "the-news-dragon-aa631",
    storageBucket: "the-news-dragon-aa631.appspot.com",
    messagingSenderId: "647961815459",
    appId: "1:647961815459:web:60d293fa6e24ece7ca9216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;