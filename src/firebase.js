import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHJNYfP5d9SJFLMH0h3m5klew7F2fkz5M",
    authDomain: "megarian-carpet.firebaseapp.com",
    databaseURL: "https://megarian-carpet-default-rtdb.firebaseio.com/",
    projectId: "megarian-carpet",
    storageBucket: "megarian-carpet.appspot.com",
    messagingSenderId: "554885079723",
    appId: "1:554885079723:web:bc12a7f75f46adf69d4dee"
  } 

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const rugdb = firebase.database()




export {db, auth, rugdb};