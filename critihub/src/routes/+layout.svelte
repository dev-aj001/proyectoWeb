
<script>import { browser } from "$app/environment";
import { onMount } from "svelte";
import "bootstrap/dist/css/bootstrap.css";

onMount(async () => {
  if (!browser) return;

  // this is enough for most components
  await import("bootstrap");

  // some components require a bootstrap instance, to fulfil their job. In that case, use this:
  // const bootstrap = await import("bootstrap");
  // sample usage: 
  // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

});
// Initialization for ES Users

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
    <a class="navbar-brand" href="#" style="color: white;">Mi Sitio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="/juegos">Juegos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Series">Peliculas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Peliculas">Series</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</nav>
<!-- Navbar -->
<style>
  .navbar {
  background: #025E73;
}
.navbar-light .navbar-nav .nav-link {
color: white;
}
</style>
<slot></slot>