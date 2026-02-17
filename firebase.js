// firebase.js

// Import Firebase modules (for v9 modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your web app's Firebase configuration
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

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
