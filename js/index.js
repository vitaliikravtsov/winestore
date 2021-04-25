// Check age
const body = document.querySelector("body");
const confirmAge = document.querySelector(".confirmAge");
const allowedBttn = document.querySelector(".allowed");
const notAllowedBttn = document.querySelector(".notAllowed");
const notAllowedPage = document.querySelector(".notAllowedPage");

allowedBttn.addEventListener("click", function () {
  confirmAge.style.display = "none";
  body.style.overflowY = "visible";
});

notAllowedBttn.addEventListener("click", function () {
  notAllowedPage.style.display = "flex";
});

//

//Burger menu
const burgerIcon = document.querySelector(".burger-icon");
const navbar = document.querySelector(".navbar");

burgerIcon.addEventListener("click", function () {
  navbar.classList.toggle("navbar_active");
});

navbar.addEventListener("click", function () {
  navbar.classList.remove("navbar_active");
});
//

// Slider
const slides = document.querySelectorAll(".product-list");
const productsAll = slides[0].children; // first section shop
// const productsAllArray = Array.prototype.slice.call(slides[0].children); // first section shop
const productsSorting = slides[1].children; // second section shop
// const productsSorting = Array.prototype.slice.call(slides[1].children); // second section shop
const sliderBttnNext = document.querySelector(".sliderBttn-next");
const sliderBttnPrev = document.querySelector(".sliderBttn-prev");

for (let i = 0; i < productsAll.length; i++) {
  function nextSlide() {
    productsAll;
  }
}
// console.log(slides[0]);

let step = 0;
sliderBttnNext.addEventListener("click", moveSlideNext);
sliderBttnPrev.addEventListener("click", moveSlideBack);

function moveSlideNext() {
  step -= 270;
  slides[0].style.left = `${step}px`;
}
function moveSlideBack() {
  step += 270;
  slides[0].style.left = `${step}px`;
}

// const products = document.querySelectorAll(".product");
// for (let i = 0; i < products.length; i++) {
//   products[i].setAttribute("id", i);
// }

// let href = 0;
// sliderBttnNext.addEventListener("click", () => {
//   sliderBttnNext.setAttribute("href", ` #${href++}`);
// });
