const scrollTp = document.querySelector('#scrollToTop');
scrollTp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
window.addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
        scrollTp.style.opacity = 1
    } else {
        scrollTp.style.opacity = 0
    }
})

// Dark Mode

const themeToggle = document.querySelector('.checkbox');
const body = document.querySelector('body');
const darkmode = localStorage.getItem('dark');


themeToggle.addEventListener('change', function () {
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        localStorage.setItem('dark', 'active')
    } else {
        localStorage.removeItem('dark')
    }
})

// Navbar

const menu = document.querySelector('.fa-bars') 
const navbar = document.querySelector('.navbar ul')

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})