import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//** obtener configuracion dependiendo el entorno  */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,

    databaseURL: process.env.REACT_APP_DATABASEURL,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  };

  firebase.initializeApp(firebaseConfig);
  
//** Configuracion con variables */
// const firebaseConfig = {
//     apiKey: "AIzaSyBHRLxPGeOs9GPytXF9z8hnA8RTQ_GsyWA",
//     authDomain: "gsoft-journal-app.firebaseapp.com",
//     projectId: "gsoft-journal-app",
//     storageBucket: "gsoft-journal-app.appspot.com",
//     messagingSenderId: "795477817553",
//     appId: "1:795477817553:web:0b8a78096a41c25379adf0"
//   };
//   const firebaseConfigTesting = {
//     apiKey: "AIzaSyADigL5jAme89TFJOcBIfx6mMzk3OP4Oa0",
//     authDomain: "apoinments-admin.firebaseapp.com",
//     databaseURL: "https://apoinments-admin.firebaseio.com",
//     projectId: "apoinments-admin",
//     storageBucket: "apoinments-admin.appspot.com",
//     messagingSenderId: "603088219744",
//     appId: "1:603088219744:web:627174b37b7579da561d05",
//     measurementId: "G-VGDLPV7WCF"
//   };

// //   console.log(process.env);

//   if( process.env.NODE_ENV === 'test' ){
//       firebase.initializeApp(firebaseConfigTesting);
//   } else{
//       // development - production
//       firebase.initializeApp(firebaseConfig);
//   }


  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider, 
      firebase
  }