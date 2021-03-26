/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/**
 * JS to get an hamburger responsive menu
 */

const hamburger = document.getElementById("hamburger");
const headerMenu = document.querySelector(".js-header__menu");
const lang = document.querySelector(".js-lang");
const menu = document.querySelector(".js-menu");
const menuList = document.querySelector(".js-menu__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("js-header__menu--show");
  lang.classList.toggle("js-lang--show");
  menu.classList.toggle("js-menu--show");
  menuList.classList.toggle("js-menu__list--show");
});
