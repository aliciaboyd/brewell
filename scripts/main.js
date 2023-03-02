const nav = document.querySelector(".main-nav");
const menuList = document.querySelector(".main-nav ul");
const menuBtn = document.querySelector("#nav-btn");
const hero_height = document.querySelector(".hero").offsetHeight * .8;

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > hero_height) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
})