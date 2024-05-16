<script>
    import { app }  from '$lib/firebase';
    import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';

    let email = '';
    let password = '';

    let loginError = '';

    const handleSubmit = () => {
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log(AuthErrorCodes.INVALID_LOGIN_CREDENTIALS);
        console.log('Contraseña:', password);
        // Por ahora, solo imprimimos los valores en la consola
    };

    // optener el servicio de Authentication 
    const auth = getAuth(app);

    // Funcion para mandar las credenciales a firebase
    const loginEmailPass = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            //console.log(userCredentials.user);
            loginError = '';
        } catch (error) {
            
            if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
                loginError = 'Correo o contraseña incorrectos, try again'
                console.log(error.code, loginError);
            }
        }
    }

</script>

<div class="form-container">
    <h2>Iniciar Sesión</h2>
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
            <button type="submit">Iniciar Sesión</button>
        </div>
        <div class="forgot-password">
            <a href="/">¿Olvidaste tu contraseña?</a>
        </div>
    </form>
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
        background-color: #007bff;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .form-group button:hover {
        background-color: #0056b3;
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