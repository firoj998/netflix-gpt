// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3raLQ9s1Adi2eaeldJVjmPcQemtEn8qc",
  authDomain: "netflix-gpt-7a678.firebaseapp.com",
  projectId: "netflix-gpt-7a678",
  storageBucket: "netflix-gpt-7a678.appspot.com",
  messagingSenderId: "599034422156",
  appId: "1:599034422156:web:b50b13c33fb0a6c9b4aca9",
  measurementId: "G-2GEVT3RX4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

