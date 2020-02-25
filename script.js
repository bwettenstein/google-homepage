const headerElements = document.getElementsByClassName('header-element');
const footerElements = document.getElementsByClassName('footer-element');
const buttonElements = document.getElementsByClassName('button-element');
const footer = document.querySelector('footer');
const searchBar = document.querySelector('.search-bar');

// let gridIcon = document.getElementsByTagName('i');

document.querySelector('#theme-changer').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    for(let x = 0; x<headerElements.length; x++) {
        headerElements[x].classList.toggle('dark');
    }
    for(let y = 0; y < footerElements.length; y++) {
        footerElements[y].classList.toggle('dark');
    }
    for(let z = 0; z < buttonElements.length; z++) {
        buttonElements[z].classList.toggle('dark');
    }
    footer.classList.toggle('dark');
    searchBar.classList.toggle('dark');
})
