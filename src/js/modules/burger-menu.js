export default function () {

    let ham = document.querySelector('.header-btn');
    let nav = document.querySelector('.header-actions');

    ham.addEventListener('click', function () {
        ham.classList.toggle('opened');
        nav.classList.toggle('opened');
    })
}


