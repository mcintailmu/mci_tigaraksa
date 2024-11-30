// Toggle class active hamburger menu

const navbarNav =document.querySelector('.navbar-nav');
// ketika Hamburger Di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Klik diluar Sidebar

const hm = document.querySelector('#hamburger-menu');


document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  
});
