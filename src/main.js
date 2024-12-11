"use strict";
let multipleMenu = document.querySelectorAll(".multiple-menu");
let burgerButton = document.querySelector(".header__toggle");
let navMenu = document.querySelector(".nav");
let main = document.querySelector(".main");

burgerButton.addEventListener("click", function () {
  navMenu.classList.toggle("nav--active");
  main.classList.toggle("main--active-mobile-menu")
});


for (let i = 0; i < multipleMenu.length; i++) {
  let navElement = multipleMenu[i];
  navElement.addEventListener("click", function (evt) {
    evt.stopPropagation();
    navElement.classList.toggle("multiple-menu--active");
  });
}
