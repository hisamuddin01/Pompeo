const collection = [
    {
        id: 1,
        title:'Decor Plate',
        price: 65,
        img: './images/collection-01.png'
    },
    {
        id: 2,
        title:'Mint Pottery',
        price: 75,
        img: './images/collection-02.png'
    },
    {
        id: 3,
        title:'Set Of Potterys',
        price: 125,
        img: './images/collection-03.png'
    },
    {
        id:4,
        title: 'Orange Ceramic',
        price: 55,
        img: './images/collection-04.png'
    },
    {
        id: 5,
        title:'Dark Bowl',
        price: 115,
        img: './images/collection-05.png'
    },
    {
        id: 6,
        title:'Square Pottery',
        price: 75,
        img: './images/collection-06.png'
    }
]


// SELECTORS
const navToggle = document.querySelector('.nav__toggle');
const linksContainer = document.querySelector('.nav__links-container');
const navLinks = document.querySelector('.nav__links');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

// NAVIGATION TOGGLE BUTTON
navToggle.addEventListener('click', function() {
    const linksHeight = navLinks.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    linksContainerHeight === 0 ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0;
});

// STICKY NAVIGATION BAR
const stickyNav = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) nav.classList.add('nav__fixed')
    else nav.classList.remove('nav__fixed')
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})
headerObserver.observe(header);

// DISPLAY COLLECTION ITEM (BOXES)

const boxContainer = document.querySelector('.boxes');

window.addEventListener('DOMContentLoaded', function() {
    displayCollectionItems(collection)
})
function displayCollectionItems(collectionItems) {
    let collDisplay = collectionItems.map(function(collection) {
        // console.log(collection);
        return `
        <div class="grid__item box">
            <div class="box__img">
                <img src="${collection.img}" alt="${collection.title}">
            </div>
            <div class="box__content">
                <a href="#" class="item__title">${collection.title}</a>
                <span class="itme__price">&dollar; ${collection.price} USD</span>
            </div>
        </div>
        `
    });
    collDisplay = collDisplay.join('');
    boxContainer.innerHTML = collDisplay;
}