import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcXtyK1ThYeWmXGI4A6ghFYnz0pM3QzzQ",
  authDomain: "nara-e-commerce.firebaseapp.com",
  projectId: "nara-e-commerce",
  storageBucket: "nara-e-commerce.appspot.com",
  messagingSenderId: "131622500863",
  appId: "1:131622500863:web:502d11209b54861bcc0fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);