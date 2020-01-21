import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config  = {
    apiKey: "AIzaSyBCFhTaT5fPOESyZfS3W-9CjIKuii_DOts",
    authDomain: "crown-clothing-98608.firebaseapp.com",
    databaseURL: "https://crown-clothing-98608.firebaseio.com",
    projectId: "crown-clothing-98608",
    storageBucket: "crown-clothing-98608.appspot.com",
    messagingSenderId: "682690281077",
    appId: "1:682690281077:web:0cca8e1904fc6435fe823c",
    measurementId: "G-CQ0M6SFD5T"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;