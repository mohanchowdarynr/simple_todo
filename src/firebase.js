import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCwsuUZlN9SDPTdr7etOFKcx9B_NARTiDM",
    authDomain: "simple-todo-67e8a.firebaseapp.com",
    projectId: "simple-todo-67e8a",
    storageBucket: "simple-todo-67e8a.appspot.com",
    messagingSenderId: "866641714209",
    appId: "1:866641714209:web:f9ac9648e0a15668e0d760"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };