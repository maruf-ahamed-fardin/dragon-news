// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsSq6bPFxcfBjATSCNw_QXgSG_HXHuXjg",
  authDomain: "dragon-news-1e7fb.firebaseapp.com",
  projectId: "dragon-news-1e7fb",
  storageBucket: "dragon-news-1e7fb.firebasestorage.app",
  messagingSenderId: "864810811854",
  appId: "1:864810811854:web:33b67448f6e82dd69c2b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
