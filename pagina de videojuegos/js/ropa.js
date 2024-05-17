// Crear function ready
$(document).ready(function() {
  // Crear invocación a la API donde se obtienen los datos usando $.get con la API REST de https://fakestoreapi.com/products
  $.get('https://fakestoreapi.com/products', function(data) {
    // Recorrer los datos usando $.each
    $.each(data, function(i, item) {
      console.log(item);
      // Crear el código HTML para agregar un recuadro de ropa
      html = `
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Buscar en Amazon</a>
          </div>
        </div>
      </div>
      `;
      $('#lista-ropa').append(html);
    });
  });
});