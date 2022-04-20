const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkbox = $('.checkbox');
const container = $('.container');

const nightModeAvailable = $$('.night-mode-available')
const info = $('.info')

// cach 1
// checkbox.onchange = function (e) {
//     nightModeAvailable.forEach(function (element) {
//         element.classList.toggle('night');
//     })
// };

// cach 2
checkbox.onclick = function (e) {
    container.classList.toggle('night');
    info.classList.toggle('night')
}