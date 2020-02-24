let headerElement = document.getElementsByClassName('header-element');
// let gridIcon = document.getElementsByTagName('i');

document.querySelector('.theme-changer').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    for(let x = 0; x<4; x++) {
        headerElement[x].classList.toggle('dark');
    }
})
