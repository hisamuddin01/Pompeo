const items = [
    {
        id: 1,
        title:'Blue Plate',
        price: 65,
        img: './images/collection-01.png'
    },
    {
        id: 2,
        title:'White Potterys',
        price: 115,
        img: './images/collection-02.png'
    },
    {
        id: 3,
        title:'Wine Pottery',
        price: 95,
        img: './images/collection-03.png'
    },
    {
        id:4,
        title: 'White Cup',
        price: 55,
        img: './images/collection-04.png'
    },
    {
        id: 5,
        title:'Red Platte',
        price: 115,
        img: './images/collection-05.png'
    },
    {
        id: 6,
        title:'Wine Bowl',
        price: 115,
        img: './images/collection-06.png'
    },
    {
        id: 7,
        title:'Gray Cup',
        price: 65,
        img: './images/collection-07.png'
    },
    {
        id: 8,
        title:'Decor Plate',
        price: 65,
        img: './images/collection-08.png'
    },
    {
        id: 9,
        title:'Mint Pottery',
        price: 75,
        img: './images/collection-09.png'
    },
    {
        id: 10,
        title:'Set of Potterys',
        price: 125,
        img: './images/collection-10.png'
    },
    {
        id: 11,
        title:'Orange Ceramic',
        price: 55,
        img: './images/collection-11.png'
    },
    {
        id: 12,
        title:'Dark Bowl',
        price: 115,
        img: './images/collection-12.png'
    },
    {
        id: 13,
        title:'Squre Pottery',
        price: 75,
        img: './images/collection-13.png'
    },
    {
        id: 14,
        title:'Black Pottery',
        price: 115,
        img: './images/collection-14.png'
    },
    {
        id: 15,
        title:'Torguers Vaze',
        price: 95,
        img: './images/collection-15.png'
    },
    {
        id: 16,
        title:'Silver Pottery',
        price: 100,
        img: './images/collection-16.png'
    },
    {
        id: 17,
        title:'Mint Bowl',
        price: 115,
        img: './images/collection-07.png'
    },
    {
        id: 18,
        title:'Gold & Black Pottery',
        price: 95,
        img: './images/collection-18.png'
    },
    {
        id: 19,
        title:'Orange Plate',
        price: 65,
        img: './images/collection-19.png'
    },
    {
        id: 20,
        title:'Red Ceramic',
        price: 45,
        img: './images/collection-20.png'
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

const newItems = items.slice(7, 13);
const boxContainer = document.querySelector('.boxes');
const itemsContainer = document.querySelector('.items');


window.addEventListener('DOMContentLoaded', function() {
    displayCollectionItems(newItems)
    displayItems(items)
})
function displayCollectionItems(collectionItems) {
    let collDisplay = collectionItems.map(function(newItems) {
        // console.log(newItems);
        return `
        <div class="grid__item box">
            <div class="box__img">
                <img src="${newItems.img}" alt="${newItems.title}">
            </div>
            <div class="box__content">
                <a href="#" class="item__title">${newItems.title}</a>
                <span class="itme__price">&dollar; ${newItems.price} USD</span>
            </div>
        </div>
        `
    });
    collDisplay = collDisplay.join('');
    boxContainer.innerHTML = collDisplay;
}
function displayItems(i) {
    let itemDisplay = items.map(function(items) {
        return `
        <div class="grid__item box">
            <div class="box__img">
                <img src="${items.img}" alt="${items.title}">
            </div>
            <div class="box__content">
                <a href="#" class="item__title">${items.title}</a>
                <span class="itme__price">&dollar; ${items.price} USD</span>
            </div>
        </div>
        `
    });
    itemDisplay= itemDisplay.join('');
    itemsContainer.innerHTML = itemDisplay;
};