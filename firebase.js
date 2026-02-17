// firebase.js
// ⚡ Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ✅ Your Firebase config - replace with your Firebase project info
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---------------------------
// Admin: Create Password
// ---------------------------
async function createPassword(password, appCode, expirationMinutes) {
    if (!password || !appCode) throw new Error("Password or app code missing");

    let expiresAt = null;
    if (expirationMinutes > 0) {
        expiresAt = Timestamp.fromDate(new Date(Date.now() + expirationMinutes * 60 * 1000));
    }

    try {
        await addDoc(collection(db, "memberPasswords"), {
            password,
            appCode,
            expiresAt
        });
        return "Successfully registered!";
    } catch (err) {
        throw new Error("Error creating password: " + err.message);
    }
}

// ---------------------------
// Login Validation
// ---------------------------
async function validateLogin(inputPassword, appCode) {
    const q = query(
        collection(db, "memberPasswords"),
        where("password", "==", inputPassword),
        where("appCode", "==", appCode)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return { success: false, message: "Password not found for this app" };
    }

    // Check expiration
    const docData = snapshot.docs[0].data();
    if (docData.expiresAt) {
        const expiresTime = docData.expiresAt.toDate().getTime();
        if (expiresTime < Date.now()) {
            return { success: false, message: "Password expired" };
        }
    }

    return { success: true };
}

// Export for usage in other scripts
export { db, createPassword, validateLogin, collection, addDoc, query, where, getDocs, Timestamp };
