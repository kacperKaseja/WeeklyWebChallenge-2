// Function of hamburger menu
const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('nav')

const hamburgerTransform = () => {
    hamburgerBtn.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
}

hamburgerBtn.addEventListener('click', hamburgerTransform)

// Add funvtion to adding menu border to anchor

const navLinks = [...document.querySelectorAll('.menu__navigation')];

function navSelection(e) {
    e.preventDefault();
    console.log('adsasdas');
    this.classList.add('.border-top');
}

navLinks.forEach(link => link.addEventListener('click', navSelection))