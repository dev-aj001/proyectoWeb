<script>
    import "../app.css";
    import { signOut, onAuthStateChanged } from 'firebase/auth'
    import {auth} from '$lib/firebase'
    import {isLoggedIn, user} from '$lib/stores';
   

  // Importa la imagen
  //import imagen from '/critihub/imagenes/critighub.png';

   // Funcion de validacion de login
    const logout = async () => {
        try {
            signOut(auth)
            $isLoggedIn = false
            $user = {}
        } catch (error) {
            console.error(error)
        }
    }

</script>
 <!--Aqui comienza el nuevo navbar-->
<header class='flex shadow-md py-4 px-4 sm:px-10 bg-[#025E73] p-4 text-white  align-middle justify-center min-h-[70px] tracking-wide relative z-50'>
  <!--contenedor del navbar-->
    <div class='flex flex-wrap items-center justify-between gap-5 w-full'>
 <!--Logo (aun no lo muestra)-->
    <a href="/home"><img src="/critihub/imagenes/critighub.png" alt="Critihub" class='w-36' />
    </a>
    <!--Menu de opcion del navbarr-->
    <div id="MenuCategoria"
      class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <!--Aqui comienza las categorias-->
      <ul class='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li class='max-lg:border-b max-lg:py-3 px-3'>
          <a href="/home"
            class='hover:text-[#F25C05] text-white block font-semibold text-[15px]'>Juegos</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='/peliculas'
            class='hover:text-[#F25C05] text-white block font-semibold text-[15px]'>Peliculas</a>
        </li> 
         <li class='max-lg:border-b max-lg:py-3 px-3'><a href="/Series"
            class='hover:text-[#F25C05] text-white block font-semibold text-[15px]'>Series</a>
        </li>
      </ul>
    </div>
    
    
    <!--Funcion condicional de loggeo--> 
    {#if $isLoggedIn}
        <!--Aqui comienza el menu desplegable del usuario-->
        <ul>
           <!--Aqui segun es la foto se usuario-->
          <li
            class="relative px-1 after:absolute after:bg-black after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer hover:fill-black"
              viewBox="0 0 512 512">
              <path
                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                data-original="#000000" />
            </svg>
            <div class="bg-white text-black z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
              <h6 class="font-semibold text-[15px]">Bievenido</h6>
              <!--El Espacion de entre el titulo y las opciones-->
              <hr class="border-b-0 my-4" /> <!--Borde de separacion-->
              <ul class="space-y-1.5"> <!--Espaciado-->
                <!--Opciones del menu desplegable-->
                <li><a href='/perfil' class="text-sm text-gray-500 hover:text-black">Ver Perfil</a></li>
                <li><a href='/admin' class="text-sm text-gray-500 hover:text-black">Panel de Administrador</a></li>
                <li><a href="/login" on:click={logout} class="text-sm text-gray-500 hover:text-black">Cerrar Sesion</a></li>
              </ul> 
              <!--Fin de opciones del menu desplegable--> 
          </li>
        </ul>
        <!--Fin del  menu desplegable--> 

        <!-- Boton con funcion desconocida-->
        <button id="toggleOpen" class='lg:hidden ml-7'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

            {:else}
            <!--Boton de Login-->
            <button onclick="window.location = '/login'" 
        class='px-4 py-2 text-sm rounded-lg font-bold text-white border-2 border-white bg-[#F25C05] transition-all ease-in-out duration-300 hover:bg-[#f28705]'>Iniciar Sesion</button>
        {/if}
        <!--Fin de funcion condicional de loggeo--> 
        </div>
    
</header>
<!--Fin del NavBar-->

<!--Antiguo NavBar--> 
<!---
<nav class="bg-[#025E73] p-4 text-white flex align-middle justify-center">

   

    <ul class="flex">
        <li class="mr-4">
            <a href="/home">Juegos</a>
        </li>
        <li class="mr-4">
            <a href="/home">Peliculas</a>
        </li>
        <li class="mr-4">
            <a href="/home">Series</a>
        </li>
        
        {#if $isLoggedIn}
            <li class="mr-4">
                <a href="/perfil">Perfil</a>
            </li>
            <li class="mr-4">
            <a href="/admin">Panel de Administrador</a>
            </li>
            <li class="mr-4">
                <a href="/login" on:click={logout}>Cerrar Sesion</a>
            </li> 
            
        {:else}
            <li class="mr-4">
                <a href="/login">Iniciar Sesion</a>
            </li>
            <li class="mr-4">
            <a href="/register">Registrarse</a>
        </li>
        {/if}

        <li class="mr-4">
            <a href="/about">About</a>
        </li>
                   
    </ul>
</nav>
-->
<!--Clase main donde se muestran las paginas--> 
<!--
<main class="bg-[#ADACAD] text-black h-screen">
    <div class="container py-6 h-full m-auto flex justify-center items-center">
        <div>
            <slot></slot> 
        </div>
    </div>
</main> -->
<main class="bg-[#ADACAD] text-black min-h-screen">
  <div class="container py-6 mx-auto flex justify-center items-center">
      <div>
          <slot></slot>
      </div>
  </div>
</main>

<!--Pie de pagina--> 
<footer class="bg-[#025E73] text-[#F2F2F2] py-6 px-16 font-sans tracking-wide">
      <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p class="text-[15px] leading-loose">© 2024<a href='/home' target='_blank'
          class="hover:underline mx-1">Critihub</a>Todos los derechos son Reservados.</p>

        <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="https://www.tepic.tecnm.mx/" class="text-[15px] hover:text-white">ITTEPIC</a></li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li><a href="#" class="text-[15px] hover:text-white">ISC</a></li>
          <li><a href="/about" class="text-[15px] hover:text-white">Contacto</a></li>
        </ul>
      </div>
    </footer>