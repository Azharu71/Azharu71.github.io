// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk hide nav

const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
