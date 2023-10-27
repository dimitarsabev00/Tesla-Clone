// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAHQwaRZ-hU3NR52GKofYuJ0t85DlX6Ce4",
  authDomain: "tesla-clone-a055a.firebaseapp.com",
  projectId: "tesla-clone-a055a",
  storageBucket: "tesla-clone-a055a.appspot.com",
  messagingSenderId: "396203100211",
  appId: "1:396203100211:web:f9737123bd3b696107fb46",
  measurementId: "G-4TKCLRYRL6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
