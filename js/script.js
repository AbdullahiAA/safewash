const menuIcon = document.querySelector(".menu-icon")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav li a")
const body = document.querySelector('body')
const header = document.querySelector('header')
const main = document.querySelector('main')


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
