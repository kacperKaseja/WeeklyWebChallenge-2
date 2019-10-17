// Function of hamburger menu
const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('nav')
const divWrap = document.querySelector('.footer');


const hamburgerTransform = () => {
    hamburgerBtn.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
}

hamburgerBtn.addEventListener('click', hamburgerTransform)

// Add funvtion to adding menu border to anchor

const navLinks = [...document.querySelectorAll('.menu__navigation')];

// function navSelection(e) {
//     // e.preventDefault();
//     console.log('adsasdas');
//     this.classList.add('.border-top');
//     menu.classList.remove('menu--active');
//     hamburgerBtn.classList.toggle('hamburger--active');
// }

//scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('menu--active');
        hamburgerBtn.classList.remove('hamburger--active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
});


const viewMoreBtn = document.querySelector('.gallery__button')
const divHide = document.querySelector('.conteiner__hide')

viewMoreBtn.addEventListener('click', () => {
    if (viewMoreBtn.textContent === "View More") {
        divHide.style.display = `flex`;
        divHide.classList.add(`flex-column`);
        viewMoreBtn.textContent = `Hide`;
    } else {
        document.querySelector('.conteiner__hide').style.display = `none`;
        viewMoreBtn.textContent = `View More`;
    }
})


//Funkcja pobierajaca index danego elementu
const articles = [...document.querySelectorAll('.blog__post')];


articles.forEach(article => {
    article.addEventListener('click', (e) => {
        const index = articles.indexOf(article)
        console.log(index);
        [...document.querySelectorAll('.blog__text-wrapper')].style.transform = `translateX(-120%)`;

    })
})


//scrolling function


const nav = document.querySelector('header'); // Identify target

window.addEventListener('scroll', function (event) { // To listen for event
    event.preventDefault();

    if (window.scrollY > 80) { // Just an example
        nav.style.backgroundColor = '#fff'; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});