<script>
    let nombre = '';
    let apellido = '';
    let edad = '';
    let sexo = '';
  
    function handleSubmit() {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log({ nombre, apellido, edad, sexo });
    }
  </script>
  
  <style>
    /* Estilos de Tailwind CSS */
    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
  </style>
  
  <div class="bg-gray-100 p-8">
    <h2 class="text-2xl font-semibold mb-4">Por favor, ingresa tus datos:</h2>
    <form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input type="text" id="nombre" bind:value={nombre} required
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido:</label>
        <input type="text" id="apellido" bind:value={apellido} required
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="edad" class="block text-sm font-medium text-gray-700">Edad:</label>
        <input type="number" id="edad" bind:value={edad} required
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="sexo" class="block text-sm font-medium text-gray-700">Sexo:</label>
        <select id="sexo" bind:value={sexo} required
          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="">Selecciona tu sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div class="mb-4">
        <button type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Enviar
        </button>
      </div>
    </form>
  </div>
  