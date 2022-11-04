// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDaiL_mmD22cbF7YQeRvZvFrtXjkkOHBM",
  authDomain: "auth-55f8a.firebaseapp.com",
  projectId: "auth-55f8a",
  storageBucket: "auth-55f8a.appspot.com",
  messagingSenderId: "533385293401",
  appId: "1:533385293401:web:8466270af0093041dccb48",
  measurementId: "G-P66K4DTSW7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export default firebaseApp;
