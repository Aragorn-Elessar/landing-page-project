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

// Toggle 'your-active-class' in sections
function toggleActiveStatus() {
    for (let section of sections) {
        if (inViewport(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
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
    const heading = item.querySelector('h2').innerText;
    // Create anchor tag with link
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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


