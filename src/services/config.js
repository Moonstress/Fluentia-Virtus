// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Inicializaciòn
import {getFirestore} from "firebase/firestore"; // Instancia



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNF9qukVdD0UYYe6cOfTMAnDsUvqe_w6U",
  authDomain: "fluentiavirtus.firebaseapp.com",
  projectId: "fluentiavirtus",
  storageBucket: "fluentiavirtus.appspot.com",
  messagingSenderId: "43297742010",
  appId: "1:43297742010:web:8de5f54b4148afb3e0b683",
  measurementId: "G-GQ97CZ7L8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//Exportamos referencia
export const db = getFirestore(app);