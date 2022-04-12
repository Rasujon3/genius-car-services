// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyCbII7V-ItdkYHMil3JgsIS_QhKovAoLpA",
  authDomain: "genius-car-services-6b155.firebaseapp.com",
  projectId: "genius-car-services-6b155",
  storageBucket: "genius-car-services-6b155.appspot.com",
  messagingSenderId: "742216187906",
  appId: "1:742216187906:web:681b6712af21444afb671b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
