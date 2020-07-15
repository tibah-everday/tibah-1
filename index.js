"use strict";

// 네비바 스크롤시 투명도 x, 홈 스크롤 시 투명도 추가, 화살표 등장

const navBar = document.querySelector(".navbar");
const navbarHeight = navBar.getBoundingClientRect().height;
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add("navbar--dark");
  } else {
    navBar.classList.remove("navbar--dark");
  }

  home.style.opacity = 1 - window.scrollY / homeHeight;
  document.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  });
});

// 네비바 메뉴 클릭시 해당 섹션으로 스크롤 이동

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  navbarMenu.classList.remove("navbarOpener");
  hamburgerOpener.classList.remove("close");
  hamburgerCloser.classList.add("close");
  // hamburgerOpener.classList.toggle("close");
  // hamburgerCloser.classList.toggle("close");
  const target = event.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// 애로우 스크롤

arrowUp.addEventListener("click", () => {
  const scrollTo = document.querySelector("#home");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// 프로젝트 필터
const workBtnContainer = document.querySelector(".work__categories");
console.log(workBtnContainer);
const projectContainer = document.querySelector(".work__projects");
console.log(projectContainer);

const projects = document.querySelectorAll(".project");
console.log(projects);

workBtnContainer.addEventListener("click", () => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  const active = document.querySelector(".category_btn.active");
  active.classList.remove("active");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("active");
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

// 버튼제어 따로 만들었을 경우는 아래(My Code)

// const workBtns = document.querySelectorAll(".category_btn");
// console.log(workBtns);
// workBtnContainer.addEventListener("click", () => {
//   workBtns.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   event.target.classList.add("active");
// });

const hamburger = document.querySelector(".navbar__toggle-btn");
const hamburgerOpener = document.querySelector(".opener");
const hamburgerCloser = document.querySelector(".closer");
hamburger.addEventListener("click", () => {
  // const navbarMenu = document.querySelector(".navbar__menu");
  navbarMenu.classList.toggle("navbarOpener");
  console.log(hamburgerOpener);
  console.log(hamburgerCloser);
  hamburgerOpener.classList.toggle("close");
  hamburgerCloser.classList.toggle("close");
  // hamburger.childNodes.toggle("close");
});
