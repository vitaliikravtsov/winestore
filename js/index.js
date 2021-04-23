// Check age
const body = document.querySelector("body");
const confirmAge = document.querySelector(".confirmAge");
const allowedBttn = document.querySelector(".allowed");
const notAllowedBttn = document.querySelector(".notAllowed");
const notAllowedPage = document.querySelector(".notAllowedPage");

window.onload = (function () {
  allowedBttn.addEventListener("click", function () {
    confirmAge.style.display = "none";
    body.style.overflowY = "visible";
  });

  notAllowedBttn.addEventListener("click", function () {
    notAllowedPage.style.display = "flex";
  });

  body.style.overflowY = "hidden";
})();
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
