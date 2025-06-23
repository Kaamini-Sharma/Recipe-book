// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2RtosoPEQInqXMCXVT57A4sY2xrRTiI",
  authDomain: "recipe-book-3473a.firebaseapp.com",
  projectId: "recipe-book-3473a",
  storageBucket: "recipe-book-3473a.firebasestorage.app",
  messagingSenderId: "1053926037586",
  appId: "1:1053926037586:web:88f40cfd3d45d3056c678b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
