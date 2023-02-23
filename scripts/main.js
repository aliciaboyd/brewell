const nav = document.querySelector(".main-nav");

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scoll");
  }
}

window.onscroll = function () {
  scrollFunction();
};
