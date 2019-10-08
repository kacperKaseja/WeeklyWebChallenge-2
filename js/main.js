// Function of hamburger menu
const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('nav')


const headerHeight = document.querySelector('header').clientHeight
console.log(headerHeight)

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

viewMoreBtn.addEventListener('click', () => {
    if (viewMoreBtn.textContent === "View More") {
        document.querySelector('.conteiner__hide').style.display = `block`;
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
        console.log(index)

    })
})