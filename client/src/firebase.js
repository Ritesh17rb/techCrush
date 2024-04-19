// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webwiz-e1c6a.firebaseapp.com",
  projectId: "webwiz-e1c6a",
  storageBucket: "webwiz-e1c6a.appspot.com",
  messagingSenderId: "733366135749",
  appId: "1:733366135749:web:384ce6b10c0abbc5be79ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);