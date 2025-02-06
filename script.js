let navbar = document.querySelector('nav');

// this function make the navbar visible when the user scrolls down.
window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'transparent';
    }
}