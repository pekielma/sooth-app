// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASURAMENT_ID
apiKey: "AIzaSyC_575wGmfuhDmSASPR7o6PSE7d5yBtLtk",
authDomain: "sooth-app-32ff2.firebaseapp.com",
projectId: "sooth-app-32ff2",
storageBucket: "sooth-app-32ff2.appspot.com",
messagingSenderId: "668623453177",
appId: "1:668623453177:web:d9e1ccec42c1c06ef51b28",
measurementId: "G-JFSKXG0GQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

