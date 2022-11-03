import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNNM6cq_4ZyhRH5TFFmMhH-ul5MfkWCrM",
  authDomain: "slack-clone-25d37.firebaseapp.com",
  projectId: "slack-clone-25d37",
  storageBucket: "slack-clone-25d37.appspot.com",
  messagingSenderId: "288560198941",
  appId: "1:288560198941:web:d0a0a294d822a2eb77ddf4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
