const menu_open = document.querySelector(".btn__menu--open"),
  menu_close = document.querySelector(".btn__menu--close"),
  menu = document.querySelector(".header__menu");

menu_open.addEventListener("click", () => {
  menu.classList.add("js-open");
});
menu_close.addEventListener("click", () => {
  menu.classList.remove("js-open");
});
