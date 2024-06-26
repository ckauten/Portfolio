document.addEventListener('DOMContentLoaded', checkDarkMode);

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $menu = $('#menu'),
    $sidebar = $('#sidebar'),
    $main = $('#main');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px'],
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Menu.
  $menu.appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'right',
    target: $body,
    visibleClass: 'is-menu-visible',
  });

  // Search (header).
  var $search = $('#search'),
    $search_input = $search.find('input');

  $body.on('click', '[href="#search"]', function (event) {
    event.preventDefault();

    // Not visible?
    if (!$search.hasClass('visible')) {
      // Reset form.
      $search[0].reset();

      // Show.
      $search.addClass('visible');

      // Focus input.
      $search_input.focus();
    }
  });

  $search_input
    .on('keydown', function (event) {
      if (event.keyCode == 27) $search_input.blur();
    })
    .on('blur', function () {
      window.setTimeout(function () {
        $search.removeClass('visible');
      }, 100);
    });

  // Intro.
  var $intro = $('#intro');
})(jQuery);

//THE ANIMATION
var jobTitles = [
  ' Software Engineer',
  ' Full Stack Web Developer',
  'n HTML Hero',
  ' CSS Champion',
  ' JavaScript Journeyman',
  ' Digital Dreamweaver',
  'n Algorithm Artisan',
  ' Tech Enthusiast',
  ' Coding Wizard',
  ' Problem Solver',
  ' Digital Sorcerer',
  'n Innovation Ninja',
  ' Code Explorer',
  ' Pixel Prodigy',
  ' Code Artisan',
  ' Tech Maverick',
  ' Full Stack Ninja',
  ' Software Craftsman',
  ' Code Whisperer',
  ' Scripting Guru',
  ' Digital Maestro',
  ' Tech Artisan',
  ' Backend Virtuoso',
  ' Frontend Guru',
  ' Dreamer',
];

//VARIABLES

let toggleDarkMode = document.querySelector('.toggleDarkMode');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let dynamicText = document.getElementById('dynamicText');
let jobTitleSpan = document.querySelector('#jobTitle');
let hexImage = document.querySelector('#hexImage');

function typeText(index, text, speed) {
  if (index < text.length) {
    jobTitleSpan.textContent += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(index, text, speed);
    }, speed);
  } else {
    setTimeout(function () {
      changeJobTitle();
    }, 1500);
  }
}

function changeJobTitle() {
  var currentJobIndex = jobTitles.indexOf(jobTitleSpan.textContent);
  var nextJobIndex = (currentJobIndex + 1) % jobTitles.length;
  var nextJobTitle = jobTitles[nextJobIndex];

  deleteText(0, jobTitleSpan.textContent.length, 50, function () {
    typeText(0, nextJobTitle, 50);
  });
}

function deleteText(index, length, speed, callback) {
  if (index <= length) {
    jobTitleSpan.textContent = jobTitleSpan.textContent.substring(0, length - index);
    index++;
    setTimeout(function () {
      deleteText(index, length, speed, callback);
    }, speed);
  } else {
    callback();
  }
}

typeText(0, jobTitleSpan.textContent, 50);

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
  hexImage.style.filter = 'invert(100%)';
  localStorage.setItem('darkmode', 'true');
}

//THE LIGHTMODE SETTING

sun.addEventListener('click', lightmode);

function lightmode() {
  toggleDarkMode.style.filter = 'invert(0%)';
  sun.style.visibility = 'hidden';
  moon.style.visibility = 'visible';
  hexImage.style.filter = 'invert(0%)';
  localStorage.setItem('darkmode', 'false');
}
