let togglermenu = document.querySelector(".toggler-menu");
let element = document.querySelector(".list");
let body = document.querySelector("body");
let click = document.querySelector(".click-button");
let head = document.querySelector(".navbar");
let buttonmenu = document.querySelector(".button-menu");

togglermenu.addEventListener("click", function () {
  element.classList.toggle("toggle");
});

click.addEventListener("click", function () {
  head.classList.toggle("box");
  togglermenu.classList.toggle("toggler-menu-themes");
  body.classList.toggle("back-ground-color");
  click.classList.toggle("click-button-dir");
  buttonmenu.classList.toggle("buttonmenu-mobile");
  element.classList.toggle("toggle-background");
});
// copyrright
let time = new Date().getFullYear();
let elment = document.createElement("p");
let text = document.createTextNode(
  `Copy right © ${time} By EasyBank All Rights Reserved`
);
elment.appendChild(text);
document.body.appendChild(elment);
elment.style.cssText =
  "background-color:#2d314d; padding:15px ;width:100% ; margin:0 auto; text-align: center; color:white; border-top:1px solid white";
