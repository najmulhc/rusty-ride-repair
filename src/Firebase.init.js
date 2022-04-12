// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDezOAgN8RQDYDAwX5B8UgwCVVi9vPvGpo",
  authDomain: "rusty-ride-repair.firebaseapp.com",
  projectId: "rusty-ride-repair",
  storageBucket: "rusty-ride-repair.appspot.com",
  messagingSenderId: "436179111880",
  appId: "1:436179111880:web:91d1a4175aa5ffa6ef7afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)