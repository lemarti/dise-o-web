$(document).ready(function() {
    var products = [
      { name: "Producto 1", price: "$10", img: "https://via.placeholder.com/150" },
      { name: "Producto 2", price: "$20", img: "https://via.placeholder.com/150" },
      { name: "Producto 3", price: "$30", img: "https://via.placeholder.com/150" },
      { name: "Producto 4", price: "$40", img: "https://via.placeholder.com/150" }
    ];
  
    products.forEach(function(product) {
      $('#product-catalog').append(`
        <div class="col-md-4 col-lg-3">
          <div class="card product-card">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      `);
    });
  });