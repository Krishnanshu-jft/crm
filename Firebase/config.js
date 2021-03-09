import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDO4x8NRDLIOU-1w53F-wQOOJlCVwmKEkQ",
    authDomain: "jft-ems.firebaseapp.com",
    projectId: "jft-ems",
    storageBucket: "jft-ems.appspot.com",
    messagingSenderId: "110046352179",
    appId: "1:110046352179:web:8f8f7c0b13be2ffee1a446"
  };
firebase.initializeApp(firebaseConfig)
const secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary')
const projectFirestore = firebase.firestore();
const projectAuth      = firebase.auth();
const secondAuth       = secondaryApp.auth();
const timestamp        = firebase.firestore.FieldValue.serverTimestamp
export {projectAuth, projectFirestore, timestamp, secondAuth}