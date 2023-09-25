
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8Dm3xL5h_5CtzsdhidHHI1JQkNhpjrSk",
  authDomain: "flixxit-project-8b479.firebaseapp.com",
  projectId: "flixxit-project-8b479",
  storageBucket: "flixxit-project-8b479.appspot.com",
  messagingSenderId: "559098789723",
  appId: "1:559098789723:web:69a85936ce2d3d57cf247e",
  measurementId: "G-NCTC6YN5N9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)