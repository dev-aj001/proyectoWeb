<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel con Contenedor de Imágenes y Subtítulos</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .carousel-image-container {
            max-width: 80%; /* Ancho máximo del contenedor */
            margin: 0 auto; /* Margen automático a los lados para centrar el contenedor */
            height: 400px; /* Altura fija para los contenedores de imágenes */
            overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el contenedor */
        }
        .carousel-caption h5,
        .carousel-caption p {
            color: blue; /* Color de texto negro */
            font-size: 24px; /* Tamaño de la fuente */
        }
    </style>
</head>
<body>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-image-container">
                    <img class="d-block w-100 img-fluid" src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg" alt="First slide" style="object-fit: cover;">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Grand Theft Auto V</h5>
                    <p>Explora el impresionante mundo de Los Santos y el condado de Blaine en 
                        la experiencia definitiva de Grand Theft Auto V..</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container">
                    <img class="d-block w-100 img-fluid" src="https://i.ytimg.com/vi/rP7Z3NOzRWU/maxresdefault.jpg" alt="Second slide" style="object-fit: cover;">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h5>GTA VI</h5>
                    <p>todo lo que sabemos hasta ahora del nuevo videojuego de Rockstar.</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-image-container">
                    <img class="d-block w-100 img-fluid" src="https://hips.hearstapps.com/hmg-prod/images/the-witcher-1621253612.jpeg?crop=0.9998100664767331xw:1xh;center,top&resize=1200:*" alt="Third slide" style="object-fit: cover;">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h5>The Witcher</h5>
                    <p>todo lo que sabemos de la temporada 4.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <h1>Peliculas</h1>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carrusel de Imágenes con Flechas Traslúcidas</title>
        <style>
            .contenedor-carrusel {
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
                position: relative;
            }
            .contenedor-imagen {
                display: inline-block;
                margin-right: 10px; /* Espacio entre las imágenes */
                transition: transform 0.5s ease; /* Transición suave para el desplazamiento */
            }
            /* Opcional: Ajustar el tamaño de las imágenes */
            .contenedor-imagen img {
                width: 200px; /* Ancho de las imágenes */
                height: auto; /* Mantener la proporción de aspecto */
            }
            /* Estilo de las flechas */

        </style>

    <body>
        <div class="contenedor-carrusel">
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 1">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 2">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 3">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 4">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 5">
            </div>
        </div>

    
        <script>
            const carrusel = document.querySelector('.contenedor-carrusel');
            let position = 0;
    
            // Función para mover el carrusel
            function moverCarrusel(offset) {
                position += offset;
                if (position > 0) {
                    position = 0;
                } else if (position <= -(carrusel.scrollWidth - carrusel.clientWidth)) {
                    position = -(carrusel.scrollWidth - carrusel.clientWidth);
                }
                carrusel.style.transform = `translateX(${position}px)`;
            }
        </script>
    </body>

    <h1>Series</h1>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carrusel de Imágenes con Flechas Traslúcidas</title>
        <style>
            .contenedor-carrusel {
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
                position: relative;
            }
            .contenedor-imagen {
                display: inline-block;
                margin-right: 10px; /* Espacio entre las imágenes */
                transition: transform 0.5s ease; /* Transición suave para el desplazamiento */
            }
            /* Opcional: Ajustar el tamaño de las imágenes */
            .contenedor-imagen img {
                width: 200px; /* Ancho de las imágenes */
                height: auto; /* Mantener la proporción de aspecto */
            }
            /* Estilo de las flechas */
      
        </style>

    <body>
        <div class="contenedor-carrusel">
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 1">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 2">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 3">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 4">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 5">
            </div>
        </div>
    
        <script>
            const carrusel = document.querySelector('.contenedor-carrusel');
            let position = 0;
    
            // Función para mover el carrusel
            function moverCarrusel(offset) {
                position += offset;
                if (position > 0) {
                    position = 0;
                } else if (position <= -(carrusel.scrollWidth - carrusel.clientWidth)) {
                    position = -(carrusel.scrollWidth - carrusel.clientWidth);
                }
                carrusel.style.transform = `translateX(${position}px)`;
            }
        </script>
    </body>

    <h1>Videojuegos</h1>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carrusel de Imágenes con Flechas Traslúcidas</title>
        <style>
            .contenedor-carrusel {
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
                position: relative;
            }
            .contenedor-imagen {
                display: inline-block;
                margin-right: 10px; /* Espacio entre las imágenes */
                transition: transform 0.5s ease; /* Transición suave para el desplazamiento */
            }
            /* Opcional: Ajustar el tamaño de las imágenes */
            .contenedor-imagen img {
                width: 200px; /* Ancho de las imágenes */
                height: auto; /* Mantener la proporción de aspecto */
            }
    
        </style>

    <body>
        <div class="contenedor-carrusel">
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 1">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 2">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 3">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 4">
            </div>
            <div class="contenedor-imagen">
                <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg" alt="Imagen 5">
            </div>
        </div>
       
    
        <script>
            const carrusel = document.querySelector('.contenedor-carrusel');
            let position = 0;
    
            // Función para mover el carrusel
            function moverCarrusel(offset) {
                position += offset;
                if (position > 0) {
                    position = 0;
                } else if (position <= -(carrusel.scrollWidth - carrusel.clientWidth)) {
                    position = -(carrusel.scrollWidth - carrusel.clientWidth);
                }
                carrusel.style.transform = `translateX(${position}px)`;
            }
        </script>
    </body>
    

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

        
                        

        
                        
