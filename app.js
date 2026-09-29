// navbar
const navbar = document.querySelector('.navbar');
const hero = document.getElementById('carouselWeckDanner');

function updateNav() {
  const limit = hero.offsetHeight - navbar.offsetHeight;
  navbar.classList.toggle('navbar-solid', window.scrollY > limit);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();