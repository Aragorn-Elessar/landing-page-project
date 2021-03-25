# Landing Page Project

## Table of Contents

* [Project-Description](#Project-Description)
* [Prerequisites](#Prerequisites)
* [Installing](#Installing)
* [Steps](#Steps)
* [Author](#Author)
* [Credits](#Credits)

## Project-Description

The starter project had some HTML and CSS styling to display a static version of the Landing Page. I needed to convert this project from a static page to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

## Prerequisites

Any code editor (e.g: VSCode, Atom,... etc)

## Installing

Terminal commands to start using project:

- Get a copy on your machine
```
`git clone https://github.com/Aragorn-Elessar/landing-page-project.git`
```
- Call into the directory location
```
`cd landing-page-project`
```
- Opens code in `VSCode`
```
`code .`
```

## Steps

- Define global variables
```js
const listItems = document.getElementsByClassName('landing__container');
const navbar = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('[data-nav]');
```


- Create a dynamic navbar `for...of` statement in case any more suctions get added in the future
```js
// build the nav
let secNumber = 1;

for (let item of listItems) {
    const navItem = document.createElement('li');
    // Select sections heading names to be applied to navbar list anchors
    const heading = item.querySelector('h2').innerText;
    // Create anchor tags with links
    const anchor = document.createElement('a');
    anchor.setAttribute('href', `#section${secNumber}`)
    anchor.textContent = `${heading}`;
    // Add style classes to navbar list
    anchor.classList.add('navbar__menu', 'menu__link');

    navItem.appendChild(anchor);
    fragment.appendChild(navItem);
    secNumber++;
}
navbar.appendChild(fragment);
```

- Create helping function to check if a specific section is in the `viewport`
```js
// Check if the element is in the viewport
function inViewport(e) {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
```

- Create helping function to `add/remove` active status from sections & navbar list
```js
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
```


- Add an event to listen for `scroll` event and add active class to the `navbar/section` in view
```js
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActiveStatus);
```

- Add smooth scrolling to navbar anchors
```js
// Add smooth scrolling to navbar anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

## Author

[Mahmoud Gadallah](https://github.com/Aragorn-Elessar)

## Credits

A [Udacity](https://www.udacity.com) Nanodegree project, provided by [FWD](https://egfwd.com/) initiative