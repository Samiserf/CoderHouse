  import * as firebase from 'firebase/app';
  import 'Firebase/firestore';
  
const app = firebase.initializeApp({
    apiKey: "AIzaSyBFjj7ujURwiUmHA6T4vzNLiu-QiGls5fE",
    authDomain: "ecommerce-ch-85557.firebaseapp.com",
    databaseURL: "https://ecommerce-ch-85557.firebaseio.com",
    projectId: "ecommerce-ch-85557",
    storageBucket: "ecommerce-ch-85557.appspot.com",
    messagingSenderId: "681222300954",
    appId: "1:681222300954:web:75eed82fd231dbf54af8a3"
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
};

