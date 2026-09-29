// navbar
const navbar = document.querySelector('.navbar');
const hero = document.getElementById('carouselWeckDanner');

function updateNav() {
  const limit = hero.offsetHeight - navbar.offsetHeight;
  navbar.classList.toggle('navbar-solid', window.scrollY > limit);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// close the mobile menu after choosing a section
const menu = document.getElementById('navbarSupportedContent');

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// footer year auto-update

document.getElementById('year').textContent = new Date().getFullYear();