// JavaScript to highlight the active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function updateActiveNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Add event listener for scrolling
window.addEventListener('scroll', updateActiveNavLink);

// Initial call to set the active nav link based on the current scroll position
updateActiveNavLink();