// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3zgQ8GDzl0oeQZXnQUBAbcjcXDYnwqmM",
  authDomain: "ecommerce-8424d.firebaseapp.com",
  projectId: "ecommerce-8424d",
  storageBucket: "ecommerce-8424d.firebasestorage.app",
  messagingSenderId: "202643565986",
  appId: "1:202643565986:web:bf70a3cb7b241d68d096fb",
  measurementId: "G-68PDKKEK9T",
};

// Initialize Firebase services
const appFirebase = initializeApp(firebaseConfig)
export default appFirebase
