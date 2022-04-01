import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdZ-0NDYHF-ct1mrXzmEVnfAE15glMJo",
  authDomain: "house-marketplace-app-f19c4.firebaseapp.com",
  projectId: "house-marketplace-app-f19c4",
  storageBucket: "house-marketplace-app-f19c4.appspot.com",
  messagingSenderId: "1023120051773",
  appId: "1:1023120051773:web:0eaf51c7341db6d871a454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore();