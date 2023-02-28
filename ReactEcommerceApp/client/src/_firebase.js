import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWDLXzg3aunKKW88QrXG5uAD6ZYZEI2A",
  authDomain: "ecommerceapp-7ecb5.firebaseapp.com",
  projectId: "ecommerceapp-7ecb5",
  storageBucket: "ecommerceapp-7ecb5.appspot.com",
  messagingSenderId: "625956025415",
  appId: "1:625956025415:web:dd3a0f17e39edfccf16d62",
  measurementId: "G-FW5PK7FSY0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.analytics.getAnalytics(app);
const db = firebase.firestore();
const storage = firebase.storage();

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {auth, googleAuthProvider, storage};
export default db;