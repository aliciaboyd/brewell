const nav = document.querySelector(".main-nav");
const menuList = document.querySelector(".main-nav ul");
const menuBtn = document.querySelector("#nav-btn");
const hero = document.querySelector(".hero");
const hero_height = hero.offsetHeight * .8;
let scrollPosition = window.scrollY;

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > hero_height) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  menuList.classList.toggle("active");
}