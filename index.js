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
  //   if (window.scrollY > 70) {
  //     home.classList.add("home--semi");
  //   } else {
  //     home.classList.remove("home--semi");
  //   }

  //   if (window.scrollY > 150) {
  //     home.classList.add("home--dim");
  //   } else {
  //     home.classList.remove("home--dim");
  //   }
  //   if (window.scrollY > 230) {
  //     home.classList.add("home--transparent");
  //   } else {
  //     home.classList.remove("home--transparent");
  //   }
  //   부등식 합쳐서 쓰고(70<ㅁㄴㅇㄹ<150) 이런식으로, else if 쓰는 게 좋겠지만 나는 귀찮다
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

// 애로우 스크롤

arrowUp.addEventListener("click", () => {
  const scrollTo = document.querySelector("#home");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
