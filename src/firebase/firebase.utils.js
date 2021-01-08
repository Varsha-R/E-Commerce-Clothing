import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_o5OeLlcwhdD2yB2w6g-sL5SH-WZq9Xg",
    authDomain: "crown-shoppe.firebaseapp.com",
    projectId: "crown-shoppe",
    storageBucket: "crown-shoppe.appspot.com",
    messagingSenderId: "443144461095",
    appId: "1:443144461095:web:8fbedf0ad2bc615641e702"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
