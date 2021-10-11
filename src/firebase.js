import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHJNYfP5d9SJFLMH0h3m5klew7F2fkz5M",
    authDomain: "megarian-carpet.firebaseapp.com",
    projectId: "megarian-carpet",
    storageBucket: "megarian-carpet.appspot.com",
    messagingSenderId: "554885079723",
    appId: "1:554885079723:web:bc12a7f75f46adf69d4dee"
  } 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};