//1. sticky header :  스크롤 시 헤더가 따라다니는 기능
//2. header menu toggle
//3. navigation menu design : 해당 섹션에 네비게이션 활성화 및 디자인 변경
//4. question section accordion
//5. reaveal effect
//6. mobile navigation design

/*================Header Sticky===============*/
const stickyHeader = () => {
  const header = document.querySelector(".header");
  const scrY = window.scrollY;
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/*===============================*/

window.addEventListener("scroll", () => {
  stickyHeader();
});

/*================Header menu toggle===============*/
const menu = document.querySelector(".menu-icon");
const toggleMenu = (event) => {
  //   console.log(this); //화살표 함수는 this에 전역개체 window를 호출한다.
  //   console.log(e);
  //   console.log(event.target);
  const target = event.currentTarget;

  //   console.log(target.childNodes);
  //   console.log(target.children);
  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    target.firstElementChild.setAttribute("class", "ri-close-line");
  } else {
    target.firstElementChild.setAttribute("class", "ri-menu-line");
  }
};

menu.addEventListener("click", toggleMenu);

/*===============================*/
