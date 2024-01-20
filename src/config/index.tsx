// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAiSroT26jTOIbIySgQf9M9jwnHfTRH2QU",
  authDomain: "url-shortner-5501e.firebaseapp.com",
  projectId: "url-shortner-5501e",
  storageBucket: "url-shortner-5501e.appspot.com",
  messagingSenderId: "1041300097247",
  appId: "1:1041300097247:web:130226ef7afe1e92c5416a",
  measurementId: "G-DPLPYVCX2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
