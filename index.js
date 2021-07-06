const navToggle = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('.close-btn');
const darkOverlay = document.querySelector('.dark-overlay');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  sideBar.classList.add('show');
  darkOverlay.classList.add('show-overlay');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show');
  darkOverlay.classList.remove('show-overlay');
});
