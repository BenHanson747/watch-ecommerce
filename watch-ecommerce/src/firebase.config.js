import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa7Oe1Hkhae-n_4PRHhzAT2a-yoOIyN3A",
  authDomain: "watch-ecommerce-project.firebaseapp.com",
  projectId: "watch-ecommerce-project",
  storageBucket: "watch-ecommerce-project.appspot.com",
  messagingSenderId: "1078757538787",
  appId: "1:1078757538787:web:4d3069b0ffdee40c333ed6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
