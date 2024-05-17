<script>
    let searchValue = '';
    function handleInput(event) {
        searchValue = event.target.value;
    }
</script>


<div class="my-div">   
<div class="blue-bar text-white flex justify-between items-center px-4 py-2">
    <div class="space-x-4">
        <button class="button">Juegos</button>
        <button class="button">Películas</button>
        <button class="button">Series</button>
    </div>
    <input type="text" class="search-bar border border-gray-300 rounded-md px-4 py-2 w-48" placeholder="Buscar..." bind:value={searchValue} on:input={handleInput}>
    <button class="login-button bg-orange-500 text-white px-4 py-2 rounded-md">Iniciar sesión</button>
</div>

<div class="cuadrogeneral p-4 rounded-lg">
    <div class="bottom-bar-content">
        Grand Theft Auto V <br>(GTA V)
    </div>
    <div class="video-link">
        <p class="release-datexd">Fecha de lanzamiento: 17/09/2013 <br> Trailer Oficial Youtube</p>
        <iframe width="450" height="250" src="https://www.youtube.com/embed/QkkoHAzjnUs?si=hDt-7BdgZE_L9rVl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="score-containerv">
        <span class="scorexd">Score</span>
        <span class="star-icon">&#9733;</span>
        <span class="scorenum">4.5</span>
    </div>
    <div class="square-mamalon">
        <img src="https://th.bing.com/th/id/OIP.YP8uU_kv4kHzzMHQkg1hygHaHa?rs=1&pid=ImgDetMain">
    </div>
    <div class="square-mamalon">
        <img src="https://www.xtrafondos.com/wallpapers/asus-rog-republic-of-gamers-logo-5092.jpg">
    </div>
    <div class="square-mamalon">
        <img src="https://th.bing.com/th/id/OIP.XiHY_4yuBHZ7WUJuQI5YUAHaHa?rs=1&pid=ImgDetMain">
    </div>
    <div class="miscore">
        <span class="scorexd">Mi Score</span>
        <span class="scorenum">5.0</span>
    </div>
    <div class="estrellitas-rating">
        <span class="star-icon">&#9733;</span>
        <span class="star-icon">&#9733;</span>
        <span class="star-icon">&#9733;</span>
        <span class="star-icon">&#9733;</span>
        <span class="star-icon">&#9733;</span>
    </div>
    <div class="category-texto">
        <p class="category-texto">Categorias</p>
    </div>
    <br class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="category-container">
        <div class="category-box">
            <p class="category-text">Juegos</p>
        </div>
        <div class="category-box">
            <p class="category-text">Mundo abierto</p>
        </div>
        <div class="category-box">
            <p class="category-text">Shooter</p>
        </div>
    </div>
    <br class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="sinopsis bg-[#ADACAD] p-4 rounded-lg text-left">
        <p class="text-xl ml-64">Sinopsis: <br> Grand Theft Auto V (comúnmente abreviado como GTA V o Grand Theft Auto V: Modo historia), es la decimoquinta entrega de la saga Grand Theft Auto que fue lanzado el 17 de septiembre de 2013 para las consolas Xbox 360 y PlayStation 3.</p>
    </div>
    <div class="reseña">
        <button class="reseña bg-[#037F8C] text-black px-10 py-3 rounded-md mt-4">Reseñar</button>
    </div>
</div>
</div>

<style>
    .my-div {
        max-width: 1200px;
        max-height: 800px;
        margin: 0 auto;
        margin-top: 2rem;
        padding: 1rem;
        background-color: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
     body {
        background-color: rgba(173, 172, 173, 1);
    }
    .blue-bar {
        background-color: rgba(2, 94, 115, 1);
    }
    .login-button {
        background-color: rgba(242, 92, 5, 1);
    }
    .search-bar {
        width: 20%;
        position: absolute;
        left: 70%;
    }
    .cuadrogeneral {
        background-color: rgba(242, 242, 242, 1);
        width: 80%;
        height: 80%;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: -20%;
        text-align: center;
        border-radius: 5%;
    }
    .bottom-bar-content {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
    }
    .video-link {
        width: 30%;
        height: auto;
        display: block;
        margin-bottom: -20rem;
        margin-left: 2%;
    }
    .release-datexd {
        width: 70%;
        margin-left: 15%;
        font-size: arial;
        color: rgba(0, 0, 0, 0.5);
    }
    .score-containerv {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .star-icon {
        color: rgb(236, 236, 0);
        position: relative;
        top: -40%;
        font-size: 3.5rem;
        margin-right: 0.5rem;
    }
    .scorenum {
        width: 0%;
        font-style: normal;
        font-size: 1.5rem;
    }
    .button {
        font-size: 1.5rem;
    }
    .scorexd {
        font-size: 2.5rem;
        margin-right: 0.5rem;
        color: rgb(0, 0, 0);
    }
    .square-mamalon {
        height: auto;
        width: 7%;
        height: 20%;
        display: inline-flex;
        margin: 0 15px;
        margin-right: 0.5rem;
    }
    .square-mamalon img {
        height: auto;
        width: 7%;
        height: 10%;
        position: absolute;
        object-fit: cover;
        margin-top: auto;
    }
    .miscore {
        height: auto;
        margin-top: -16%;
        margin-left: 65%;
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .estrellitas-rating {
        height: auto;
        margin-top: -3%;
        margin-left: 65%;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .category-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .category-box {
        width: 10%;
        height: 15%;
        background-color: rgba(51, 18, 197, 0.1);
        border-radius: 10%;
        margin: 1%;
        margin-top: 0%;
        margin-left: 0%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .category-text {
        margin-top: 5%;
        font-size: 1.2rem;
        font-weight: arial;
    }
    .category-texto {
        margin-top: 5%;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .sinopsis {
        margin-top: 0%;
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: -15%;
    }
    .reseña {
        font-size: 2.5rem;
        margin-left: 40%;
        margin-top: -14%;
    }
    </style>