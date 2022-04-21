// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9vusOTpPkfkWq7gU_50lZmfJlxIl288g",
  authDomain: "fire-base-contact-app-6748e.firebaseapp.com",
  databaseURL: "https://fire-base-contact-app-6748e-default-rtdb.firebaseio.com",
  projectId: "fire-base-contact-app-6748e",
  storageBucket: "fire-base-contact-app-6748e.appspot.com",
  messagingSenderId: "513274863395",
  appId: "1:513274863395:web:a97cbafad79cb5898eb696"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

