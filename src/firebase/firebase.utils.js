import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYbFzqlyIDiNowkpUcc-et6EH8kIK2rBM",
  authDomain: "crwn-db-c1bf4.firebaseapp.com",
  projectId: "crwn-db-c1bf4",
  storageBucket: "crwn-db-c1bf4.appspot.com",
  messagingSenderId: "875131738259",
  appId: "1:875131738259:web:3b1603ac7a7f0f843d5566"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;