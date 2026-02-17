// firebase.js

const firebaseConfig = {
    apiKey: "AIzaSyDHkhd7O2rJ2goNTCudeRUxQjrTFe2KoHc",
    authDomain: "my-software-portal.firebaseapp.com",
    projectId: "my-software-portal",
    storageBucket: "my-software-portal.firebasestorage.app",
    messagingSenderId: "1072405993700",
    appId: "1:1072405993700:web:26f11d34303ae73346f4f1",
    measurementId: "G-TZG517WDYE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
