import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxPKjlN9fZO4QSlZdzv7DPjZHMohNMq0c",
    authDomain: "whats-app-8b264.firebaseapp.com",
    projectId: "whats-app-8b264",
    storageBucket: "whats-app-8b264.appspot.com",
    messagingSenderId: "987603288795",
    appId: "1:987603288795:web:6ad14dda70ac70be8542fe",
    measurementId: "G-7ZN3SR2CVV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;