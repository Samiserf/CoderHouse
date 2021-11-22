import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFjj7ujURwiUmHA6T4vzNLiu-QiGls5fE",
  authDomain: "ecommerce-ch-85557.firebaseapp.com",
  databaseURL: "https://ecommerce-ch-85557.firebaseio.com",
  projectId: "ecommerce-ch-85557",
  storageBucket: "ecommerce-ch-85557.appspot.com",
  messagingSenderId: "681222300954",
  appId: "1:681222300954:web:75eed82fd231dbf54af8a3",
};

const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
