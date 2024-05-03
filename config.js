// conexion con firebase

const firebaseConfig = {
    apiKey: "AIzaSyBvwYX0AX7V1jCygsiuktfH59QAFfBvTZU",
    authDomain: "critichub-27650.firebaseapp.com",
    projectId: "critichub-27650",
    storageBucket: "critichub-27650.appspot.com",
    messagingSenderId: "316576317047",
    appId: "1:316576317047:web:9bb4749d2af711d8769072",
    measurementId: "G-ZLT30NQGXY"
  };
  
  // Inicializacion de Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Inicializacio con Cloud Firestore (Database) y obtener una referencia del servicio
  const db = firebase.firestore();


