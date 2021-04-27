new ProductList(new Cart());


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
const productsSorting = slides[1].children; // second section shop
const sliderBttnNext = document.querySelector(".sliderBttn-next");
const sliderBttnPrev = document.querySelector(".sliderBttn-prev");
const sliders = document.querySelectorAll(".slider");
const firstSlider = sliders[0];
const secondSlider = sliders[1];
const sliderScrollbar = document.querySelector(".slider-scrollbar");

let position = 0;
const step = 270;
sliderBttnNext.addEventListener("click", moveSlideNext);
sliderBttnPrev.addEventListener("click", moveSlideBack);



function moveSlideNext() {
  position += step;
  firstSlider.scrollLeft += step;
  sliderScrollbar.value = firstSlider.scrollLeft + sliderScreenWidth;
}
function moveSlideBack() {
  position -= step;
  firstSlider.scrollLeft -= step;
  sliderScrollbar.value = firstSlider.scrollLeft + sliderScreenWidth;
}

//scroll
const sliderWidth = firstSlider.scrollWidth;
const sliderScreenWidth = sliderScrollbar.offsetWidth
sliderScrollbar.setAttribute("min", sliderScreenWidth);
sliderScrollbar.setAttribute("max", sliderWidth);

sliderScrollbar.addEventListener("input", () => {
  firstSlider.scrollLeft = sliderScrollbar.value - sliderScreenWidth;

});
sliderScrollbar.value = firstSlider.scrollLeft
//