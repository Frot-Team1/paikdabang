let curPos = 0;
let postion = 0;
const IMAGE_WIDTH1 = 1920;
const swiperbtn1 = document.querySelector(".swiper-btn1");
const swiperbtn2 = document.querySelector(".swiper-btn2");
const swiperbtn3 = document.querySelector(".swiper-btn3");
const swiperbtn4 = document.querySelector(".swiper-btn4");
const images = document.querySelector(".ad-slider");

function prev() {
  if (curPos > 0) {
    swiperbtn2.removeAttribute("disabled");
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  if (curPos == 0) {
    swiperbtn1.setAttribute("disabled", "true");
  }
}
function next() {
  if (curPos < 3) {
    swiperbtn1.removeAttribute("disabled");
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  if (curPos == 3) {
    swiperbtn2.setAttribute("disabled", "true");
  }
}

function init() {
  swiperbtn1.setAttribute("disabled", "true");
  swiperbtn1.addEventListener("click", prev);
  swiperbtn2.addEventListener("click", next);
}
