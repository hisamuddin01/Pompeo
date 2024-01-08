const navToggle = document.querySelector('.nav__toggle');
const linksContainer = document.querySelector('.nav__links-container');
const navLinks = document.querySelector('.nav__links');

// NAVIGATION TOGGLE BUTTON
navToggle.addEventListener('click', function() {
    const linksHeight = navLinks.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    linksContainerHeight === 0 ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0;
});

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect();