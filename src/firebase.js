// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {getAuth} from "firebase/auth"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//      appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export default app

// //>>>>>>> firebasefeature

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjO7XPDUGa98VoCLEOtwAWquURM12G3xc",
  authDomain: "hackathon-dev-5fba1.firebaseapp.com",
  projectId: "hackathon-dev-5fba1",
  storageBucket: "hackathon-dev-5fba1.appspot.com",
  messagingSenderId: "259770492842",
  appId: "1:259770492842:web:9522ae92b29a397a5c6dd3",
  databaseURL : "https://hackathon-dev-5fba1-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 const db = getFirestore(app);
 export default db

// this project is going to be delted so do not worry API KEYS WONT MATTER

