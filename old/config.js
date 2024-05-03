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


  function login() {
  const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        var userId = userCredential.user.uid;
                        var date = new Date().toISOString();
                        // Guarda la fecha de acceso en Firestore
                        db.collection("userAccess").doc(userId).set({
                            lastAccess: date
                        })
                            .then(() => {
                                console.log("Fecha de acceso registrada en Firestore");
                            })
                            .catch((error) => {
                                console.error("Error al registrar fecha de acceso en Firestore: ", error);
                            });
                    })
                    .catch((error) => {
                        console.error('Error al iniciar sesión:', error);
                    });
            });
}