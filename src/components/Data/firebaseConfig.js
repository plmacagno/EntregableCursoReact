// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwIrjaq8-X4mTweIAxxBbjihzH6UHE6Hg",
  authDomain: "gaema-606db.firebaseapp.com",
  projectId: "gaema-606db",
  storageBucket: "gaema-606db.appspot.com",
  messagingSenderId: "293439986703",
  appId: "1:293439986703:web:2bf0fda27718a2cd02577a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore inicialize
const db = getFirestore(app)

export default db