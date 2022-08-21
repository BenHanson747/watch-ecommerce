// import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa7Oe1Hkhae-n_4PRHhzAT2a-yoOIyN3A",
  authDomain: "watch-ecommerce-project.firebaseapp.com",
  projectId: "watch-ecommerce-project",
  storageBucket: "watch-ecommerce-project.appspot.com",
  messagingSenderId: "1078757538787",
  appId: "1:1078757538787:web:4d3069b0ffdee40c333ed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();

export default app;
