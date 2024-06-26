document.addEventListener('DOMContentLoaded', checkDarkMode);

//Global variables
let toggleDarkMode = document.querySelector('.toggleDarkMode');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let carousel = document.querySelector('#carosel');

//THE DARKMODE SETTING

function checkDarkMode() {
  if (localStorage.getItem('darkmode') === 'true') {
    darkmode();
  } else {
    lightmode();
  }
}

moon.addEventListener('click', darkmode);

function darkmode() {
  toggleDarkMode.style.filter = 'invert(100%)';
  sun.style.visibility = 'visible';
  moon.style.visibility = 'hidden';
  localStorage.setItem('darkmode', 'true');
  carousel.style.filter = 'invert(100%)';
}

//THE LIGHTMODE SETTING

sun.addEventListener('click', lightmode);

function lightmode() {
  toggleDarkMode.style.filter = 'invert(0%)';
  sun.style.visibility = 'hidden';
  moon.style.visibility = 'visible';
  localStorage.setItem('darkmode', 'false');
  carousel.style.filter = 'invert(0%)';
}
