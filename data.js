 function loginuser() {

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
                                MSJR();
                                console.log("Fecha de acceso registrada en Firestore");
                                window.location.href ="index.html"  
                            })
                            .catch((error) => {
                                console.error("Error al registrar fecha de acceso en Firestore: ", error);
                                MSJRe();
                            });
                    })
                    .catch((error) => {
                        console.error('Error al iniciar sesión:', error);
                    });
         
}
const MSJR=()=>{
    Swal.fire({
    title: "Usuario Registrado!",
    text: "Datos guardado correctamente!",
    icon: "success"
    });
}

const MSJRe=()=>{
    Swal.fire({
    title: "Usuario no Registrado!",
    text: "Datos no se guardaron!",
    icon: "error"
    });
}