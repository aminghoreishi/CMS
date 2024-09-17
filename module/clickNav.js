let clickNav_open = document.querySelector(".clickNav_open");
let overlay = document.querySelector(".overlay");
let clickShow = document.querySelector(".clickShow");
let click__Menu = document.querySelector(".click__Menu");

let is_flag = false;

clickNav_open.style.transition = "all 2s";

clickNav_open.addEventListener("click", () => {
  is_flag = !is_flag;

  if (is_flag) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  click__Menu.classList.remove("left-0");
  click__Menu.classList.add("-left-[309px]");
});

let is__flag2 = false;

clickShow.addEventListener("click", () => {
  is__flag2 = !is__flag2;
  
  if (is__flag2) {
    overlay.classList.remove("hidden");
    click__Menu.classList.remove("-left-[309px]");
    click__Menu.classList.add("left-0");
  } else {
    overlay.classList.add("hidden");
    click__Menu.classList.add("-left-[309px]");
    click__Menu.classList.remove("left-0");
  }
});



export {overlay}