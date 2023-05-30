// toggle class active

// navbar
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// searchBox
const searchBox = document.querySelector(".search-box");
document.querySelector("#search").onclick = (e) => {
  searchBox.classList.toggle("active");
  e.preventDefault();
};

// shopingCart
const shopCart = document.querySelector(".shoping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
}

// klik diluar sidebar untuk hide nav

const hamburger = document.querySelector("#hamburger");
const search = document.querySelector("#search");
const input = document.querySelector(".search-box .form-search");
const shop = document.querySelector("#shopping-cart");
const product = document.querySelectorAll(".product");


document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !input.contains(e.target)) {
    searchBox.classList.remove("active");
  }

  if(!shop.contains(e.target) && !shopCart.contains(e.target)){
    shopCart.classList.remove('active');
  }
});
