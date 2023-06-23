// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_eDYvroaSacA7TjeKgpR1c4cZ_IYp71Y",
  authDomain: "todo-app-16c9d.firebaseapp.com",
  projectId: "todo-app-16c9d",
  storageBucket: "todo-app-16c9d.appspot.com",
  messagingSenderId: "486805920869",
  appId: "1:486805920869:web:27fec17fb8bc9e52587a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);