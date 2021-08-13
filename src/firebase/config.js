import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1Z_YPF2y8RFp7VWlNk1K5RRfKHJ5PrZ8",
  authDomain: "firegram-465cf.firebaseapp.com",
  projectId: "firegram-465cf",
  storageBucket: "firegram-465cf.appspot.com",
  messagingSenderId: "958005016356",
  appId: "1:958005016356:web:58ea843d61eeacac9c65b1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
