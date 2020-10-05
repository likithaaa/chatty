import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAut-Wc3fXXvUyfs_2FZObXQ-S-5XyFVI4',
  authDomain: 'chatty-1f82c.firebaseapp.com',
  databaseURL: 'https://chatty-1f82c.firebaseio.com',
  projectId: 'chatty-1f82c',
  storageBucket: 'chatty-1f82c.appspot.com',
  messagingSenderId: '796900732858',
  appId: '1:796900732858:web:6857246fc4a7b399b6b783',
  measurementId: 'G-GRXHQXS1L7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
