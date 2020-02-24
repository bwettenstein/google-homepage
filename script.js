const headerElements = document.getElementsByClassName('header-element');
const footerElements = document.getElementsByClassName('footer-element');
const footer = document.querySelector('footer');

// let gridIcon = document.getElementsByTagName('i');

document.querySelector('.theme-changer').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    for(let x = 0; x<headerElements.length; x++) {
        headerElements[x].classList.toggle('dark');
    }
    for(let y = 0; y < footerElements.length; y++) {
        footerElements[y].classList.toggle('dark');
    }
    footer.classList.toggle('dark');
})
