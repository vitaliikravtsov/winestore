class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector(".product-list");
    this.productService = new ProductsService();
    // this.sortDirection = "ascending";
    this.productType = "all";
    this.productService
      .getProducts()
      .then(() => this.renderProducts())
      .then(() => this.addEventListeners());
  }
  async renderProducts() {
    let productListDomString = "";
    const products = await this.productService.getProducts();
    [...products]
      .filter((product) =>
        this.productType === "all" ? true : product.type === this.productType
      )
      // .sort((a, b) =>
      //   this.sortDirection === "ascending"
      //     ? a.price - b.price
      //     : b.price - a.price
      // )
      .forEach((product) => {
        productListDomString += `
      <div class="product card">
        <img class="product__img" src="img/wines/${product.image}" alt="" />
        <p class="product__name">${product.name}</p>
        <span class="product__price">${product.price}</span>
        <button class="product__bttn bttns__bttn btn btn-info" data-bs-toggle="modal"
        data-bs-target="#productInfoModal" data-id="${product.id}">Info</button>
        <button class="product__bttn bttns__bttn btn btn-primary buy" data-id="${product.id}">Add to cart</button>
      </div>
       `;
      });
    this.container.innerHTML = productListDomString;
  }
  async addEventListeners() {
    document
      .querySelectorAll(".product .btn-info")
      .forEach((button) =>
        button.addEventListener("click", (event) =>
          this.handleProductInfoClick(event)
        )
      );
    document
      .querySelectorAll("button.buy")
      .forEach((button) =>
        button.addEventListener("click", (event) =>
          this.handleProductBuyClick(event)
        )
      );
    // document.querySelector(".ascending").addEventListener("click", async () => {
    //   this.sortDirection = "ascending";
    //   await this.renderProducts();
    //   this.addEventListeners();
    // });
    document.querySelector(".allWines").addEventListener("click", async () => {
      this.productType = "all";
      await this.renderProducts();
      this.addEventListeners();
    });
    document.querySelector(".redWines").addEventListener("click", async () => {
      this.productType = "red";
      await this.renderProducts();
      this.addEventListeners();
    });
    document
      .querySelector(".whiteWines")
      .addEventListener("click", async () => {
        this.productType = "white";
        await this.renderProducts();
        this.addEventListeners();
      });
  }
  async handleProductInfoClick(event) {
    const button = event.target; // Button that triggered the modal
    const id = button.dataset.id; // Extract info from data-* attributes
    const product = await this.productService.getProductById(id);
    console.log(product);
    const modal = document.querySelector("#productInfoModal");
    const productImg = modal.querySelector(".modal-body .product__img");
    productImg.setAttribute("src", "img/wines/" + product.image);
    productImg.setAttribute("alt", product.name);
    modal.querySelector(".modal-body .card-title").innerText = product.name;
    modal.querySelector(".modal-body .card-text").innerText =
      product.description;
    const btnBuy = modal.querySelector("button.buy");
    btnBuy.innerText = `${product.price} - Buy`;
    btnBuy.dataset.id = id;
  }
  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert("Product added to cart");
  }
}
