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
};

// klik diluar element untuk hide nav

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

  if (!shop.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});

// modal box
const modal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    modal.style.display = "flex";
    e.preventDefault();
  };
});

// klil tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  modal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
