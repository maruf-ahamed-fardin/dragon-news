import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4o8eoqAKUh9D7kEe21Ev7AVaGi7duBos",
  authDomain: "dragon-news-54137.firebaseapp.com",
  projectId: "dragon-news-54137",
  storageBucket: "dragon-news-54137.appspot.com",
  messagingSenderId: "747707859377",
  appId: "1:747707859377:web:af1f8c923240d8579b7d90"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
