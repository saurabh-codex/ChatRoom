import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD23TTSls4heGroZ6cTQNAcw3A08ci8-SM",
  authDomain: "chat-16fe8.firebaseapp.com",
  projectId: "chat-16fe8",
  storageBucket: "chat-16fe8.appspot.com",
  messagingSenderId: "721342785756",
  appId: "1:721342785756:web:b91c4a5ba6aad87560ec19",
  measurementId: "G-0ZWBC8SQLG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
