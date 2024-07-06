//
//
//

const menu = document.querySelector(".site-nav");
const toggle = document.getElementById("hamburgerMenu");

function toggleMenu() {
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
}

toggle.addEventListener("click", toggleMenu);