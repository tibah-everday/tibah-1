"use strict";

// 네비바 스크롤시 투명도 x

const navBar = document.querySelector(".navbar");
const navbarHeight = navBar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add("navbar--dark");
  } else {
    navBar.classList.remove("navbar--dark");
  }
});
