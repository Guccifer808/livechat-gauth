// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Cloud Firestore db
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgJzGRYazL1mhdElH4pN6_QP94bx8gaHs",
  authDomain: "livechat-gauth.firebaseapp.com",
  projectId: "livechat-gauth",
  storageBucket: "livechat-gauth.appspot.com",
  messagingSenderId: "136195051271",
  appId: "1:136195051271:web:ed2ec154a13071a61cffa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Cloud Firestore db
export const db = getFirestore(app);
