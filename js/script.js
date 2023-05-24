// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

const searchBox = document.querySelector(".search-box");
document.querySelector("#search").onclick = (e) => {
  searchBox.classList.toggle("active");
  e.preventDefault();
};
// klik diluar sidebar untuk hide nav

const hamburger = document.querySelector("#hamburger");
const search = document.querySelector("#search");
const input = document.querySelector(".search-box .form-search");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !input.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});
