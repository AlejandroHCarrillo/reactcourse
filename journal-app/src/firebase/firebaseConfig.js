import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBHRLxPGeOs9GPytXF9z8hnA8RTQ_GsyWA",
    authDomain: "gsoft-journal-app.firebaseapp.com",
    projectId: "gsoft-journal-app",
    storageBucket: "gsoft-journal-app.appspot.com",
    messagingSenderId: "795477817553",
    appId: "1:795477817553:web:0b8a78096a41c25379adf0"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider, 
      firebase
  }