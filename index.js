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

// 네비바 메뉴 클릭시 해당 섹션으로 스크롤 이동

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  //   console.log(link);
  if (link === undefined) {
    return;
  } else {
    console.log(link);
  }
  //   link.scrollIntoView();
  console.log(link);
  const scrollTo = document.querySelector(link);
  console.log(scrollTo);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  //   link.scrollIntoView();
});
