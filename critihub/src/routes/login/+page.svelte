<script>
  import {auth} from '$lib/firebase';
  import {isLoggedIn, user} from '$lib/stores';
  import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
  import {signInWithEmailAndPassword } from "firebase/auth";
  
  import {goto} from '$app/navigation'

  let email = '';
  let password = '';

  const signInWithEmail = async () => {
    try {

      const hola = await signInWithEmailAndPassword(auth,email,password);
            $user = hola.currentUser
             $isLoggedIn = true
            goto("/home")
            console.log("Conexion Exitosa")
    } catch (error) {
      console.error(error);
    }
  };

 const login = async() => {
        try {
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, provider)
            $user = res.user
            $isLoggedIn = true
            console.log(res)
            goto("/home")
        } catch (error) {
            console.error(error)
        }
    }
</script>

<style>
  /* Aquí puedes agregar tus estilos de Tailwind */
</style>
<main class="grid min-h-full place-items-center bg-white px-6 py-3 lg:px-12">
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Critihub">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia Sesion</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6 form-margin"  method="POST"  >
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
        <div class="mt-2">
          <input id="email" name="email" type="email"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" bind:value={email}> 
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
          
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" bind:value={password}> 
        </div>
      </div>
    </form>
     <br class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form class="space-y-3" >
    <div>
        <button on:click={signInWithEmail} type="submit" class="flex w-full justify-center rounded-md  bg-[#025E73] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F25C05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#037F8C]">Iniciar Sesion</button>
      </div>
      <div>
      <button on:click={login} class="bg-white shadow-md px-3 py-1.5 rounded-lg flex items-center space-x-4 text-gray-700 min-w-60">
        <svg class="size-10" width="256" height="262" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
        <span>Acceder con Google</span>
    </button>
    </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      ¿No tienes cuenta?
      <a href="/register" class="font-semibold leading-6 text-[#F25C05] hover:text-bg-gray-900">Crea una ahora</a>
    </p>
  </div>
</div>
</main>
