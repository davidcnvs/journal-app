
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpZsn-ZMUOOh295TOf3SVIW2go718-pg",
  authDomain: "react-cursos-882e6.firebaseapp.com",
  projectId: "react-cursos-882e6",
  storageBucket: "react-cursos-882e6.appspot.com",
  messagingSenderId: "745387371401",
  appId: "1:745387371401:web:454b99488a6c46a01bcf58"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);