// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOrbF21AM8lmfbH0ZU7DjodweTHmL4XI",
  authDomain: "netflixgpt-5d410.firebaseapp.com",
  projectId: "netflixgpt-5d410",
  storageBucket: "netflixgpt-5d410.firebasestorage.app",
  messagingSenderId: "439011834664",
  appId: "1:439011834664:web:4f232a78ccdd5d99c0ee1d",
  measurementId: "G-NLG3PWEZ4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
