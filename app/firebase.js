
import { initializeApp } from "firebase/app";
import{getAuth}from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBZvwLSlvlHVJX02lqpEUnxa4odNcKVARA",
    authDomain: "next-auth-project-f3a98.firebaseapp.com",
    projectId: "next-auth-project-f3a98",
    storageBucket: "next-auth-project-f3a98.appspot.com",
    messagingSenderId: "948567369275",
    appId: "1:948567369275:web:1355dc6f074da59b199e1e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)