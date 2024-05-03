<script>
    import "../app.css";
    import { signOut, onAuthStateChanged } from 'firebase/auth'
    import {auth} from '$lib/firebase'
    import {isLoggedIn, user} from '$lib/stores';

    const logout = async () => {
        try {
            signOut(auth)
            $isLoggedIn = false
            $user = {}
        } catch (error) {
            console.error(error)
        }
    }

    onAuthStateChanged(auth, authUser => {
        $user = authUser
        $isLoggedIn = !!authUser;
    })

</script>

<nav class="bg-neutral-800 p-4 text-white flex align-middle justify-center">
    <ul class="flex">
        <li class="mr-4">
            <a href="/">Home</a>
        </li>

        {#if $isLoggedIn}
            <li class="mr-4">
                <a href="/perfil">perfil</a>
            </li>
            <li class="mr-4">
                <a href="/#" on:click={logout}>logout</a>
            </li> 
        {:else}
            <li class="mr-4">
                <a href="/login">login</a>
            </li>
        {/if}

        <li class="mr-4">
            <a href="/about">about</a>
        </li>
                   
    </ul>
</nav>

<main class="bg-zinc-900 text-white h-screen">
    <div class="container py-6 h-full m-auto flex justify-center items-center">
        <div>
            <slot></slot>
        </div>
    </div>
</main>
