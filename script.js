/// LINKS ///
const burger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.header-menu');

/// FUNCTIONS  ///

/// EVENTS  ///
burger.addEventListener("click", ()=> {
    burger.classList.toggle("menu__Active");
    burgerMenu.classList.toggle("menu__Active")
});