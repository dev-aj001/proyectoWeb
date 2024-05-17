<script>
    let searchValue = '';
    function handleInput(event) {
        searchValue = event.target.value;
    }

    function capturaValor(elemento){
         alert("La calificación recibida es: "+elemento.value);
       }
</script>

<div class="my-div">
    <div class="blue-bar text-white flex justify-between items-center px-4 py-2">
        <!-- Aquí puedes añadir contenido para la barra azul si es necesario -->
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
        <div class="calificacion">
            <form>
                <p class="calificacion">
                    <input type="radio" id="radio1" name="estrellas" value="5" onclick="capturaValor(this)">
                    <label for="radio1">★</label>
        
                    <input type="radio" id="radio2" name="estrellas" value="4" onclick="capturaValor(this)">
                    <label for="radio2">★</label>
        
                    <input type="radio" id="radio3" name="estrellas" value="3" onclick="capturaValor(this)">
                    <label for="radio3">★</label>
                    
                    <input type="radio" id="radio4" name="estrellas" value="2" onclick="capturaValor(this)">
                    <label for="radio4">★</label>
                    
                    <input type="radio" id="radio5" name="estrellas" value="1" onclick="capturaValor(this)">
                    <label for="radio5">★</label>
            </form>
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
            <div class="sinopsis ">
                <p class="text-xl">Sinopsis: <br> Grand Theft Auto V (comúnmente abreviado como GTA V o Grand Theft Auto V: Modo historia), es la decimoquinta entrega de la saga Grand Theft Auto que fue lanzado el 17 de septiembre de 2013 para las consolas Xbox 360 y PlayStation 3.</p>
            </div>
            <div class="reseña">
                <button class="reseña">Reseñar</button>
            </div>
        </div>
    </div>

<style>
    .my-div {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 2rem;
        padding: 1rem;
        background-color: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .cuadrogeneral {
        background-color: rgba(242, 242, 242, 1);
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        border-radius: 5%;
    }
    .bottom-bar-content {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    .video-link {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
    }
    .video-link iframe {
        width: 100%;
        height: 600px;
        max-width: 100%;
        border-radius: 0.5rem;
    }
    .release-datexd {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.5);
    }
    .score-containerv {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }
    .star-icon {
        color: rgb(236, 236, 0);
        font-size: 2rem;
        margin-right: 0.5rem;
    }
    .scorenum {
        font-size: 1.5rem;
    }
    .scorexd {
        font-size: 2rem;
        margin-right: 0.5rem;
        color: rgb(0, 0, 0);
    }
    .square-mamalon {
        display: inline-block;
        margin: 0.5rem;
        width: calc(15% - 1rem);
        height: auto;
    }
    .square-mamalon img {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
    }
    .miscore {
        margin-top: 2rem;
        font-size: 2rem;
    }
    .category-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2rem;
    }
    .category-box {
        flex: 1 1 calc(20% - 1rem);
        background-color: rgba(166, 163, 182, 0.616);
        border-radius: 0.5rem;
        margin: 0.5rem;
        padding: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .category-text {
        font-size: 1rem;
    }
    .category-texto {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
    }
    .sinopsis {
        margin-top: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
    }
    .reseña {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 2rem;
    }
    .reseña button {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        .bottom-bar-content {
            font-size: 2.5rem;
        }
        .star-icon {
            font-size: 2.5rem;
        }
        .scorenum {
            font-size: 2rem;
        }
        .scorexd {
            font-size: 2.5rem;
        }
        .category-text {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1024px) {
        .bottom-bar-content {
            font-size: 3rem;
        }
        .star-icon {
            font-size: 3rem;
        }
        .scorenum {
            font-size: 2.5rem;
        }
        .scorexd {
            font-size: 3rem;
        }
        .category-text {
            font-size: 1.5rem;
        }
    }
    label{color:grey;font-size:5.0em}
        /*escondemos los botones de radio*/
        input[type="radio"]{display :none;}

        .calificacion{
            direction:rtl;
            unicode-bidi:bidi-override;
            text-align: center;
        }

        label:hover{color:rgb(236, 236, 0)}
        label:hover ~ label{color:rgb(189, 192, 33);}
        label:hover ~ label ~ label{color:rgb(245, 170, 9)}
        label:hover ~ label ~ label ~ label{color:rgb(231, 155, 13)}

        input[type = "radio"]:checked ~ label{color:rgb(236, 236, 0)}
</style>
