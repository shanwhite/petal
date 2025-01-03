// FUNCTIONALITY: Using a database such as Firebase
// This code is responsible for connecting the firebase to the react project.

// Import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";  // Help register user to firebase console
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Petal's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSqkQ9zl3esFDVed8lIGAj1L5hWjgqqDY",
  authDomain: "petal-cs385.firebaseapp.com",
  databaseURL: "https://petal-cs385-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petal-cs385",
  storageBucket: "petal-cs385.firebasestorage.app",
  messagingSenderId: "841063821284",
  appId: "1:841063821284:web:c221f202bdd3bad6f1e1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app; 