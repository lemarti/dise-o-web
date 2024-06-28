$(document).ready(function() {
    var products = [
      { name: "Special IPA", price: "$10", img: "../../images/rubia.png" },
      { name: "Dark Stout", price: "$20", img: "../../images/stout.png" },
      { name: "King Apa", price: "$30", img: "../../images/roja.png" },
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