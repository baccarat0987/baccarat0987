// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHkhd7O2rJ2goNTCudeRUxQjrTFe2KoHc",
  authDomain: "my-software-portal.firebaseapp.com",
  projectId: "my-software-portal",
  storageBucket: "my-software-portal.appspot.com",
  messagingSenderId: "1072405993700",
  appId: "1:1072405993700:web:26f11d34303ae73346f4f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, where, getDocs, Timestamp };
