const viewText = document.getElementById('view-text');
const jsButtonQ = document.querySelector('.js-button-q');
const jsButtonW = document.querySelector('.js-button-w');
const jsButtonE = document.querySelector('.js-button-e');
const jsButtonR = document.querySelector('.js-button-r');
const jsButtonT = document.querySelector('.js-button-t');
const jsButtonY = document.querySelector('.js-button-y');

jsButtonQ.addEventListener('click', () => {
    viewText.innerHTML += 'Ciao' + ' ';
});
jsButtonW.addEventListener('click', () => {
    viewText.innerHTML += 'Come stai?' + ' ';
});
jsButtonE.addEventListener('click', () => {
    viewText.innerHTML += 'Buongiorno!' + ' ';
});
jsButtonR.addEventListener('click', () => {
    viewText.innerHTML += 'Buonasera!' + ' ';
});
jsButtonT.addEventListener('click', () => {
    viewText.innerHTML += 'Arrivederci!' + ' ';
});
jsButtonY.addEventListener('click', () => {
    viewText.innerHTML += 'Grazie!' + ' ';
});
