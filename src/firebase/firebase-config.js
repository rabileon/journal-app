import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbwKfF5kHqfm3F23DCJ2DDfW9Od_K4218',
  authDomain: 'react-app-cursos-12119.firebaseapp.com',
  projectId: 'react-app-cursos-12119',
  storageBucket: 'react-app-cursos-12119.appspot.com',
  messagingSenderId: '370125668137',
  appId: '1:370125668137:web:22bf7edafade9a11f78138',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
