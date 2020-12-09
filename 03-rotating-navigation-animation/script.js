const container = document.querySelector(".container");
const menu = document.querySelector(".menu-circle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  container.classList.toggle("rotate");
});
