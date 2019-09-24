const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('nav')

const hamburgerTransform = () => {
    hamburgerBtn.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
}

hamburgerBtn.addEventListener('click', hamburgerTransform)