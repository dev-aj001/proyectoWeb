
// Obtener referencia a la base de datos de Firebase
const database = firebase.database();

// Función para obtener el último acceso del usuario
function obtenerUltimoAcceso() {
    const userId = firebase.auth().currentUser.uid; // Obtener el ID del usuario actualmente autenticado

    // Referencia a la ubicación en la base de datos donde se almacena el último acceso del usuario
    const lastAccessRef = database.ref('usuarios/' + userId + '/ultimoAcceso');

    // Escuchar cambios en el valor del último acceso
    lastAccessRef.on('value', (snapshot) => {
        const ultimoAcceso = snapshot.val();
        document.getElementById('lastAccess').innerText = 'Último acceso: ' + ultimoAcceso;
    });
}

// Llamada a la función para obtener el último acceso cuando se carga la página
window.onload = function() {
    obtenerUltimoAcceso();
};
