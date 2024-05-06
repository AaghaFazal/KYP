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

let slideIndex = 0;
let timeoutID; // Variable to store the timeout ID

// Function to show slides
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Call the function to change slides every 5 seconds
    timeoutID = setTimeout(showSlides, 5000);
}

// Initialize the slideshow
showSlides();

// Function to change slides manually
function changeSlide(n) {
    clearTimeout(timeoutID); // Clear the existing timeout
    slideIndex += n;
    showSlides();
}

// Function to change slides to the current slide
function currentSlide(n) {
    clearTimeout(timeoutID); // Clear the existing timeout
    slideIndex = n;
    showSlides();
}

// Function to pause the slideshow for 5 seconds when an image is clicked
function pauseSlideshow() {
    clearTimeout(timeoutID); // Clear the existing timeout
    // Pause the slideshow for 5 seconds and then resume
    timeoutID = setTimeout(showSlides, 10000);
}

// Add event listeners to images for the click event
const slides = document.getElementsByClassName("mySlides");
for (let i = 0; i < slides.length; i++) {
    const img = slides[i].querySelector("img");
    img.addEventListener("click", pauseSlideshow);
}

