import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi2sltnX2mvGO-igmUPvXNBQbMXn1z7io",
  authDomain: "fir-react-todo-dd950.firebaseapp.com",
  projectId: "fir-react-todo-dd950",
  storageBucket: "fir-react-todo-dd950.appspot.com",
  messagingSenderId: "812919526937",
  appId: "1:812919526937:web:bf0be8536fcedc96167c88"
}

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export default db;
