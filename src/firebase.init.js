// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXaJOUlqNauGbu-3abLA_79L6z29TSQ1w",
  authDomain: "genius-car-63961.firebaseapp.com",
  projectId: "genius-car-63961",
  storageBucket: "genius-car-63961.appspot.com",
  messagingSenderId: "774805787809",
  appId: "1:774805787809:web:38b0f874b6ba59b5988ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
