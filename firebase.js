import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDE7hgt-_0SZEaO1J_rwH9HpWVRqMFm_n4",
    authDomain: "chatsystem-abad4.firebaseapp.com",
    projectId: "chatsystem-abad4",
    storageBucket: "chatsystem-abad4.appspot.com",
    messagingSenderId: "141374405492",
    appId: "1:141374405492:web:5d9b4b5c5a287505084a21"
  };

  let app;
  if (firebase.apps.length ===0){
      app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app()
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  export {db, auth};