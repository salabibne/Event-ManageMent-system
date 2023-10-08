// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7f6ycnJsMkFPpxyODuReZktV96G7ygfk",
  authDomain: "codesal.firebaseapp.com",
  projectId: "codesal",
  storageBucket: "codesal.appspot.com",
  messagingSenderId: "1037084816112",
  appId: "1:1037084816112:web:23367159e1412c29d00835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;