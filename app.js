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






// reviews auto-scroll
const marquee = document.querySelector('.reviews-marquee');
const track = document.querySelector('.reviews-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let position = 0;      // the counter, so it can hold decimals
let lastTime = 0;      // time of the previous frame
let paused = false;
let resumeTimer;       // used to resume after a touch
const speed = 50;      // pixels per second


function scrollReviews(time) {
  if (lastTime) {
    const delta = Math.min((time - lastTime) / 1000, 0.1);

    if (paused) {
      position = marquee.scrollLeft;
    } else {
      position += speed * delta;
      const half = track.offsetWidth / 2;
      if (position >= half) position -= half;
      marquee.scrollLeft = position;
    }
  }
  lastTime = time;
  requestAnimationFrame(scrollReviews);
}

// mouse: pause while hovering
marquee.addEventListener('pointerenter', e => {
  if (e.pointerType === 'mouse') paused = true;
});
marquee.addEventListener('pointerleave', e => {
  if (e.pointerType === 'mouse') paused = false;
});

// finger: pause while touching, resume 2 seconds after letting go
marquee.addEventListener('touchstart', () => {
  clearTimeout(resumeTimer);
  paused = true;
}, { passive: true });

// touchend = finger lifted, touchcancel = the browser took the touch over (iOS does this)
function resumeAfterTouch() {
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(() => { paused = false; }, 2000);
}
marquee.addEventListener('touchend', resumeAfterTouch);
marquee.addEventListener('touchcancel', resumeAfterTouch);

if (marquee && !reducedMotion) {
  requestAnimationFrame(scrollReviews);
}










// footer year auto-update

document.getElementById('year').textContent = new Date().getFullYear();