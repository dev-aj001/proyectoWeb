<script>
    import {isLoggedIn, user} from '$lib/stores';
    import Formulario from '../../formulario.svelte';
</script>

<h1>Perfil</h1>
{#if $isLoggedIn }
    <img src={$user.photoURL} alt="photo" class="size-40 rounded-full">
    <h3>{$user.displayName}</h3>
{/if}

<Formulario></Formulario>
