/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const listItems = document.getElementsByClassName('landing__container');
const navbar = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

const sections = document.querySelectorAll('[data-nav]');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Check if the element is in the viewport
function inViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Toggle active class in sections & navbar list
function toggleActiveStatus() {
    const a = document.querySelectorAll('a');
    setTimeout(() => {
        for (let [index, section] of sections.entries()) {
            if (inViewport(section)) {
                section.classList.add('your-active-class');
                a[index].classList.add('active');
            } else {
                section.classList.remove('your-active-class');
                a[index].classList.remove('active');
            }
        }
    }, 0);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let secNumber = 1;

for (let item of listItems) {
    const navItem = document.createElement('li');
    // Select sections heading names to be applied to list anchors
    const heading = item.querySelector('h2').innerText;
    // Create anchor tags with links
    const anchor = document.createElement('a');
    anchor.setAttribute('href', `#section${secNumber}`)
    anchor.textContent = `${heading}`;
    // Add style to navbar list
    anchor.classList.add('navbar__menu', 'menu__link');

    navItem.appendChild(anchor);
    fragment.appendChild(navItem);
    secNumber += 1;
}
navbar.appendChild(fragment);


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActiveStatus);


// Add smooth scrolling to navbar anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 *
 *
*/