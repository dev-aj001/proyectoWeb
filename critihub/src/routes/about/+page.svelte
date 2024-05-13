<script>
import {auth} from '$lib/firebase';


const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
</script>
<!----<script> 
 import { onMount } from 'svelte';
import {auth} from '$lib/firebase';
 let users = [];

    onMount(() => {
        // Obten una referencia al servicio de autenticación de Firebase
     auth = firebase.auth();
        
        // Obten la lista de usuarios autenticados
        auth.listUsers().then((userRecords) => {
            // Mapea los usuarios autenticados y guarda sus IDs y correos electrónicos
            users = userRecords.map((user) => {
                return { uid: user.uid, email: user.email };
            });
        }).catch((error) => {
            console.error("Error obteniendo lista de usuarios:", error);
        });
    });
</script>

<h1>Lista de Usuarios Autenticados</h1>

{#if users.length > 0}
    <ul>
        {#each users as user}
            <li>{user.uid} - {user.email}</li>
        {/each}
    </ul>
{:else}
    <p>No hay usuarios autenticados.</p>
{/if}  -->