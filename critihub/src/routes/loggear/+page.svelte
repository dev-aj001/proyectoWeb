<script>
    import { app }  from '$lib/firebase';
    import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
    import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
    import {goto} from '$app/navigation'
    import {isLoggedIn, user} from '$lib/stores';
    import { getFirestore, collection, addDoc  } from "firebase/firestore";
    import Swal from 'sweetalert2'
    import {createUserWithEmailAndPassword } from "firebase/auth";


    const db = getFirestore(app);
    
    let email = '';
    let password = '';
    let nombre = '';
    let edad = '';
    let genero = '';

    let loginError = '';

    const handleSubmit = async () => {
        try {
             const create = await createUserWithEmailAndPassword(auth, email, password)
            $user = create.user
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
             goto("/#")
        } catch (error) {
                MSJRe();
             console.error(error);
        }
    };

    // optener el servicio de Authentication 
    const auth = getAuth(app);

    // Funcion para mandar las credenciales a firebase
    const loginEmailPass = async () => {
        try {
            const hola = await signInWithEmailAndPassword(auth, email, password);
                $user = hola.currentUser
             $isLoggedIn = true
            goto("/#")
            console.log("Inicio Exitoso");
            loginError = '';
        } catch (error) {
            
            if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
                loginError = 'Correo o contraseña incorrectos, try again'
                console.log(error.code, loginError);
            }
        }
    }
const login = async() => {
        try {
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, provider)
            $user = res.user
            $isLoggedIn = true
            console.log(res)
            goto("/#")
        } catch (error) {
            console.error(error)
        }
    }
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

<div class="form-container tab-content">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#login" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Iniciar Sesion</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#register" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Registrarse</button>
  </ul>
  <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
    <h4>Iniciar Sesión</h4>
    <form on:submit|preventDefault={loginEmailPass}>
        <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" bind:value={email} required>
        </div>
        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" bind:value={password} required>
        </div>
        {#if loginError != ''}
            <p>{loginError}</p>
        {/if}
        <div class="form-group">
            <button on:click={loginEmailPass} type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Iniciar Sesion</button>
        </div>
         <div>
        
      <button on:click={login} class="bg-white shadow-sm p-3 mb-5 bg-body rounded ">
        <svg class="size-10" width="45" height="45" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
        <span>Acceder con Google</span>
    </button>
    <div class="forgot-password">
            <a href="/">¿Olvidaste tu contraseña?</a>
        </div>
    </div>
    </form>
    </div>
    <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
      <form>
      <h4>Registrarse</h4>
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

      <!-- Submit button -->
      <div class="form-group">
      <button on:click={handleSubmit} type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Registrarse</button>
      <p class="text-center">or:</p>
      </div>
    </form>
    </div>
</div>


<style>
    /* Puedes añadir estilos adicionales aquí */
    .form-container {
        max-width: 400px;
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

    .forgot-password {
        text-align: right;
        margin-top: 0.5rem;
    }

    .forgot-password a {
        color: #007bff;
        text-decoration: none;
    }

    .forgot-password a:hover {
        text-decoration: underline;
    }
   
</style>