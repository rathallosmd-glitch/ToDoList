// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};
if(
    !firebaseConfig.apiKey ||
    !firebaseConfig.appId ||
    !firebaseConfig.authDomain ||
    !firebaseConfig.messagingSenderId ||
    firebaseConfig.projectId ||
    firebaseConfig.storageBucket
){
    console.warn("firebase: Uma ou mais variáveis de ambiente não estão definidas.");
}

if(process.env.NODE_ENV ==="development"){
    console.log("firebase Config:", firebaseConfig);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);