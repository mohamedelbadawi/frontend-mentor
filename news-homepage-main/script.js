
let closeIcon = document.querySelector('.close')
let menuIcon = document.querySelector('.menu')
let navlinks = document.querySelector('.nav-links');
let shadow = document.querySelector('.shadow');
menuIcon.addEventListener('click', () => {
    shadow.classList.toggle('active')
    menuIcon.classList.toggle('active')
    closeIcon.classList.toggle('active')
    navlinks.classList.toggle('active')
})
closeIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active')
    closeIcon.classList.toggle('active')
    navlinks.classList.toggle('active')
    shadow.classList.toggle('active')

})
