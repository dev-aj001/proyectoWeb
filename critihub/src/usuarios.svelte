<script>
import { collection, getDocs } from "firebase/firestore"; 
import {goto} from '$app/navigation'

 // Obtener datos de Firestore y mostrar en la tabla
        db.collection("userAccess").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var userId = doc.id;
                var data = doc.data();
                var lastAccess = data.lastAccess;

                // Crear una nueva fila en la tabla con los datos recuperados
                var tableRef = document.getElementById("userTableBody");
                var newRow = tableRef.insertRow();
                var userCell = newRow.insertCell(0);
                var accessCell = newRow.insertCell(1);

                userCell.textContent = userId;
                accessCell.textContent = lastAccess;
                goto("/admin")
            });
        })
            .catch((error) => {
                console.error("Error al obtener datos de Firestore: ", error);
            });
</script>

<style>
    /* Estilos de Tailwind CSS */
    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
  </style>

    <h1>Usuarios y su última fecha de acceso</h1>
    <table id="userTable">
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Fecha de Acceso</th>
            </tr>

        </thead>
        <tbody id="userTableBody">
        </tbody>
    </table>


