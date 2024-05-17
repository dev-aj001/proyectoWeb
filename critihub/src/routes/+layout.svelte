
<script>
import { browser } from "$app/environment";
import { onMount } from "svelte";
import "bootstrap/dist/css/bootstrap.css";
import {isLoggedIn, user} from '$lib/stores';
import {signOut, onAuthStateChanged } from 'firebase/auth'

onMount(async () => {
  if (!browser) return;

  // this is enough for most components
  await import("bootstrap");

  // some components require a bootstrap instance, to fulfil their job. In that case, use this:
  // const bootstrap = await import("bootstrap");
  // sample usage: 
  // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

});
   // Funcion de validacion de login
    const logout = async () => {
        try {
            signOut(auth)
            $isLoggedIn = false
            $user = {}
            conseole
        } catch (error) {
            console.error(error)
        }
    }
</script>
<!-- Navbar -->
<!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.2.0/mdb.min.css" rel="stylesheet" />

<nav class="navbar navbar-expand-lg navbar-light txt-white">
  <div class="container">
    <a class="navbar-brand" href="/#" style="color: white;">Mi Sitio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="/juegos">Juegos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Peliculas">Peliculas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Series">Series</a>
        </li>
      </ul>
      <!--Funcion condicional de loggeo--> 
    {#if $isLoggedIn}
        
  <div class="btn-group">
    
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Usuario
  </button>
 
        
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/perfil">Ver Perfl</a></li>
            <li><a class="dropdown-item" href="/administrador">Panel de administrador</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/#" on:click={logout}>Cerrar Sesion</a></li>
        </ul>
      </div>
            {:else}
            <!--Boton de Login-->
            <form class="form-inline my-2 my-lg-0">
        <button onclick="window.location = '/loggear'" class="btn-loggin btn btn-primary my-2 my-sm-0" type="submit">Iniciar Sesión</button>
      </form>
        {/if}
     
    </div>
  </div>
</nav>
<!-- Navbar -->


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>



<style>
  .navbar {
  background: #025E73;
}
.nav-link {
color: white;

}
.btn-primary {
    background: #F25C05;
    color: white;
   transition: background 0.3s ease; /* Esto añade una transición suave */
  }

  .btn-primary:hover {
    background: #FFA500; /* Cambia el color al pasar el mouse */
}
</style>

<slot></slot>