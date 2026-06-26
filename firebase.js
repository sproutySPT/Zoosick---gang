// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6WxgyHlLJyq_GJN_DOb41adqD5WFjr-Q",
  authDomain: "zoosick---gang.firebaseapp.com",
  projectId: "zoosick---gang",
  storageBucket: "zoosick---gang.firebasestorage.app",
  messagingSenderId: "169182438799",
  appId: "1:169182438799:web:77f3c2c19c43e2862097fa",
  measurementId: "G-KHL3LBWBX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
