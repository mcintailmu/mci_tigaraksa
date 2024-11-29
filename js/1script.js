// Toggle class active hamburger menu

const navbarNav =document.querySelector('.navbar-nav');
// ketika Hamburger Di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');



// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e)=>{
  shoppingCart.classList.toggle('active'); 
  e.preventDefault(); 
}
// Klik diluar Sidebar

const hm = document.querySelector('#hamburger-menu');


document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  
});









// klik diluar Modal
  window.onclick = (e) => {
  if (e.target ===itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
 }