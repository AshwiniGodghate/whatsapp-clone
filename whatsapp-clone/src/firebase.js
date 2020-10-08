// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBITXhWJAlOk82s9YfbXyThUYWEDMfeWqE",
    authDomain: "ashwiniwhatsapp.firebaseapp.com",
    databaseURL: "https://ashwiniwhatsapp.firebaseio.com",
    projectId: "ashwiniwhatsapp",
    storageBucket: "ashwiniwhatsapp.appspot.com",
    messagingSenderId: "398270305060",
    appId: "1:398270305060:web:3842c0154633efd89559b1",
    measurementId: "G-0QQJ5MF96B"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;