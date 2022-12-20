window.onscroll = () => {

  const header = document.querySelector('header');
  const headerPositionOnTop = header.offsetTop;

  if (window.scrollY > headerPositionOnTop) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed')
  }
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})