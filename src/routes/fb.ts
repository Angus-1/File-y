// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR2oAavVAUK-O7mQcuF-7rhFaJxxMneXo",
  authDomain: "file-explr.firebaseapp.com",
  projectId: "file-explr",
  storageBucket: "file-explr.appspot.com",
  messagingSenderId: "600185404833",
  appId: "1:600185404833:web:86d5c44c826ca4cc929fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;