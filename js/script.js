let menuIcon = document.querySelector(".menu-icon")
let nav = document.querySelector("nav")
let body = document.querySelector('body')

menuIcon.addEventListener("click", () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('active');
    body.classList.toggle('navbar-open');
})