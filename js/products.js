const productsJson = `[
    {
        "image":  "img/wines/Cabernet.jpeg",
        "name": "Cabernet",
        "price": "$17,000USD",
        "type": "red"

    },
    {
        "image":  "img/wines/SauvignonBlanc.jpeg",
        "name": "Sauvignon Blanc",
        "price": "$12,000USD",
        "type": "white"

    },
    {
        "image":  "img/wines/Syrah.jpeg",
        "name": "Syrah",
        "price": "$13,000USD",
        "type": "red"

    },
    {
        "image":  "img/wines/PinotGrigio.jpeg",
        "name": "Pinot Grigio",
        "price": "$10,000USD",
        "type": "white"

    },
    {
        "image":  "img/wines/PinotNoir.jpeg",
        "name": "Pinot Noir",
        "price": "$12,000USD",
        "type": "red"

    },
    {
        "image":  "img/wines/Riesling.jpeg",
        "name": "Riesling",
        "price": "$16,000USD",
        "type": "white"

    },
    {
        "image":  "img/wines/Zifandel.jpeg",
        "name": "Zifandel",
        "price": "$14,000USD",
        "type": "red"

    },
    {
        "image": "img/wines/Soave.jpeg",
        "name": "Soave",
        "price": "$12,000USD",
        "type": "white"

    }
    
]`;

function renderProducts(products) {
  const productsContainer = document.querySelectorAll(".product-list");
  let html = "";
  for (const product of products) {
    html += `
      <div class="product">
        <img class="product__img" src="${product.image}" alt="" />
        <p class="product__name">${product.name}</p>
        <span class="product__price">${product.price}</span>
        <button class="product__bttn bttns__bttn">Add to cart</button>
      </div>
      `;
  }
  productsContainer.forEach((element) => {
    element.innerHTML = html;
  });
}

renderProducts(JSON.parse(productsJson));
