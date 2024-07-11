// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPQLHBOmXJuEiG6TbFB0gSGvjm2qv1kN8",
  authDomain: "chat-app-67a0e.firebaseapp.com",
  projectId: "chat-app-67a0e",
  storageBucket: "chat-app-67a0e.appspot.com",
  messagingSenderId: "789404745082",
  appId: "1:789404745082:web:113e484296979f75732ac3",
  measurementId: "G-7Q6JZ2Y99Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };