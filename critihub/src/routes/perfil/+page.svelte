 <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4><i class="fas fa-user"></i> Perfil</h4>
         
            <form>
              <div class="form-group">
                <label for="nombre">Nombre Completo</label>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre">
              </div>
              <div class="form-group">
                <label for="apellido">Correo</label>
                <input type="email" class="form-control" id="apellido" placeholder="Apellido">
              </div>
              <div class="form-group">
                <label for="email">Edad</label>
                <input type="text" class="form-control" id="email" placeholder="Correo Electrónico">
              </div>
              <div class="form-group">
                <label for="telefono">Genero</label>
                <input type="text" class="form-control" id="telefono" placeholder="Teléfono">
              </div>
              <div class="form-group">
                 <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .mi-div {
        max-width: 900px;
        max-height: 800px;
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
        background-color: #025E73;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
       
    }

    .form-group button:hover {
        background-color: #F25C05;
    }
    h3{
        color: #F25C05;
        text-align: left;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
</style>