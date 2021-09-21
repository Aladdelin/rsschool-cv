/// LINKS ///
const burger = document.querySelector(".header-burger");
const burgerMenu = document.querySelector(".header-menu");

const navButtonInfo = document.querySelector(".nav-button-1");
const navButtonSkills = document.querySelector(".nav-button-2");
const navButtonExamples = document.querySelector(".nav-button-3");
const navButtonExperience = document.querySelector(".nav-button-4");
const navButtonEducation = document.querySelector(".nav-button-5");
const navButtonEnglish = document.querySelector(".nav-button-6");

/// FUNCTIONS  ///

/// EVENTS  ///
burger.addEventListener("click", () => {
  burger.classList.toggle("menu__Active");
  burgerMenu.classList.toggle("menu__Active");
});

navButtonInfo.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});

navButtonSkills.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});

navButtonExamples.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});

navButtonExperience.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});

navButtonEducation.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});

navButtonEnglish.addEventListener("click", () => {
  burger.classList.remove("menu__Active");
  burgerMenu.classList.remove("menu__Active");
});
