<script>
    import { app }  from '$lib/firebase';
    import { getFirestore, collection,query, where, onSnapshot, getDocs, addDoc } from "firebase/firestore";
    import Swal from 'sweetalert2'
    import {createUserWithEmailAndPassword } from "firebase/auth";
    import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';

    const db = getFirestore(app);
    // optener el servicio de Authentication 
    const auth = getAuth(app);

    //const q = query(collection(db, "usuariosnew"));

  // Función para obtener los datos de Firestore
 let email = '';
    let password = '';
    let nombre = '';
    let edad = '';
    let genero = '';

    let loginError = '';
  async function obtenerDatosFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "usuariosnew"));
      const tablaBody = document.querySelector("#tablaDatos tbody");
      tablaBody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${data.uid}</td>
          <td>${data.nombre}</td>
          <td>${data.email}</td>
          <td>${data.rol}</td>
          <td>${data.edad}</td>
          <td>${data.genero}</td>
          <!-- Agrega más columnas según los datos que tengas -->
        `;
        tablaBody.appendChild(fila);
      });
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    return []; // Retorna un arreglo vacío en caso de error
  }
}

// Uso de la funcion
obtenerDatosFirestore()

const handleSubmit = async () => {
        try {
             const create = await createUserWithEmailAndPassword(auth, email, password)
            let id = create.user.uid
            await addDoc(collection(db, "usuariosnew"), 
            {         
                uid: id,
                nombre:nombre,
                email: email,
                password: password,
                edad: edad,
                genero: genero,
                rol:"usuario",
                createdAt: new Date(),
                
            });
            
            MSJR();
            console.log("usuario registrado")
             
        } catch (error) {
                MSJRe();
             console.error(error);
        }
    };
const MSJR=()=>{

    Swal.fire({
    title: "Usuario Registrado!",
    text: "Gracias por registrarse a crithub",
    icon: "success",
    allowOutsideClick: false, // Evita que el usuario cierre el cuadro de diálogo haciendo clic fuera de él
        showConfirmButton: true,
        allowEnterKey: true,
       
    });
}

const MSJRe=()=>{
    Swal.fire({
    title: "Usuario Ya Registrado!",
    text: "Verifique sus datos!",
    icon: "error"
    });
}

</script>



<div class="mi-div">
     <div class="row">
      <div class="col-md-6">
      <div class="form-group mb-4">
      <h3>Usuarios</h3>
      
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group mb-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" >Agregar</button> 
       <button class="btn btn-primary">Inabilitar</button>
        <button class="btn btn-primary">Eliminar</button> 
         <button class="btn btn-primary">Actulizar</button> 
      </div>
    </div>
    </div>
    <table class="table table-bordered border-black" id="tablaDatos">
        <thead>
        <tr> 
        <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          UID
        </th>
        <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          NOMBRE
        </th>
        <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          CORREO
        </th>
        <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          ROL
        </th>
        <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          EDAD
        </th>
         <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">
          Genero
        </th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
</table>
</div>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog d-flex justify-content-center">
        <div class="modal-content w-75">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">Agregar Usuario</h5>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <form>
      <!-- Name input -->
      <div class="form-group">
            <label for="email">Nombre Completro</label>
            <input type="text" id="text" name="texte" bind:value={nombre} required>
        </div>
       <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" bind:value={email} required>
        </div>
      <div class="form-group">
            <label for="email">Contraseña</label>
            <input type="password" id="email" name="email" bind:value={password} required>
        </div>
      
      

      <div class="row">
      <div class="col-md-6">
      <div class="form-group mb-4">
      <label class="form-label" for="registerPassword">Edad</label>
      <input type="text" id="text" class="form-control" bind:value={edad} required />
      
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group mb-4">
      <label class="form-label" for="registerRepeatPassword">Genero</label>
      <input type="text" id="text" class="form-control"  bind:value={genero} required/>
      
    </div>
  </div>
</div>
<div class="form-group ">
                    <!-- Submit button -->
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button on:click={handleSubmit} type="button" class="btn btn-primary">Registrar</button>
</div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<style>
    .mi-div {
        max-width: 900px;
        max-height: 800px;
        margin: 0 auto;
        margin-top: 2rem;
        padding: 1rem;
        background-color: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .form-group {
        margin-bottom: 1rem;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .form-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
    }

     .form-group button {
        background-color: #025E73;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
       
    }

    .form-group button:hover {
        background-color: #F25C05;
    }
    h3{
        color: #F25C05;
        text-align: left;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
</style>