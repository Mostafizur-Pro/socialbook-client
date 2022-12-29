// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXqrYX6rrJ50da7CTcRLu954KPw6xbUU",
  authDomain: "socialbook-bd.firebaseapp.com",
  projectId: "socialbook-bd",
  storageBucket: "socialbook-bd.appspot.com",
  messagingSenderId: "389014783822",
  appId: "1:389014783822:web:52587226e41bdcae4f801f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
