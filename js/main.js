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

function navSelection(e) {
    // e.preventDefault();
    console.log('adsasdas');
    this.classList.add('.border-top');
    menu.classList.remove('menu--active');
    hamburgerBtn.classList.toggle('hamburger--active');
}



// // scroll function
// navLinks.forEach(link => link.addEventListener('click', navSelection))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
});







// let mainNavLinks = document.querySelectorAll("nav ul li a");

// mainNavLinks.forEach(link => {
//     link.addEventListener("click", event => {
//         event.preventDefault();
//         let target = document.querySelector(event.target.hash);
//         target.scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// });