const menuIcon = document.querySelector(".menu-icon")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav li a")
const body = document.querySelector('body')
const header = document.querySelector('header')


// NavBar Toggle Handler
const navbarToggleHandler = () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('active');
    body.classList.toggle('navbar-open');
}


menuIcon.addEventListener("click", () => {
    navbarToggleHandler()
})

navLinks.forEach((navLink => {
    navLink.addEventListener("click", () => {
        if (nav.classList.value === 'open') {
            navbarToggleHandler()
        }
    })
}))


// Add Shadow to Header
window.addEventListener("scroll", () => {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
        header.classList.add('on-scroll')
    } else {
        header.classList.remove('on-scroll')
    }
})


// Hero Slides Handler
let slideIndex = 0;
showSlides();

function showSlides(slideToShow) {

    if (slideToShow) {
        slideIndex = slideToShow;
        console.log(slideToShow)
        slideToShow = null;
    }

    let slides = document.querySelectorAll(".slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 6000);
}


// Copyright Year
let currentYear = new Date().getFullYear()

let currentYearField = document.querySelector(".current-year")

currentYearField.innerHTML = currentYear