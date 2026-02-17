// firebase.js
// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHkhd7O2rJ2goNTCudeRUxQjrTFe2KoHc",
  authDomain: "my-software-portal.firebaseapp.com",
  projectId: "my-software-portal",
  storageBucket: "my-software-portal.firebasestorage.app",
  messagingSenderId: "1072405993700",
  appId: "1:1072405993700:web:26f11d34303ae73346f4f1",
  measurementId: "G-TZG517WDYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, Timestamp };
