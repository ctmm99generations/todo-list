import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwyR_QS998a3SpPspja0AxXDDkZoyJomk",
  authDomain: "todo-pra-6c2e1.firebaseapp.com",
  databaseURL: "https://todo-pra-6c2e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-pra-6c2e1",
  storageBucket: "todo-pra-6c2e1.appspot.com",
  messagingSenderId: "479166243424",
  appId: "1:479166243424:web:11fd2cd3584352b0f91905"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
