import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB41e1PzkzrZovRUxIuTsclLWYInuCS0WY",
  authDomain: "facebook-clone-7263f.firebaseapp.com",
  databaseURL: "https://facebook-clone-7263f.firebaseio.com",
  projectId: "facebook-clone-7263f",
  storageBucket: "facebook-clone-7263f.appspot.com",
  messagingSenderId: "783260623153",
  appId: "1:783260623153:web:bd82675d21fb1a541f5010",
  measurementId: "G-EVQBB5FCXF",
};

class Firebase {
  constructor(props) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    this.auth = firebase.auth();
  }
}

export default new Firebase();
