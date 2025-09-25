const viewText = document.getElementById('view-text');
const jsButtonQ = document.querySelector('.js-button-q');
const jsButtonW = document.querySelector('.js-button-w');
const jsButtonE = document.querySelector('.js-button-e');
const jsButtonR = document.querySelector('.js-button-r');
const jsButtonT = document.querySelector('.js-button-t');
const jsButtonY = document.querySelector('.js-button-y');

jsButtonQ.addEventListener('click', () => {
    viewText.innerText = 'Ciao';
});
jsButtonW.addEventListener('click', () => {
    viewText.innerText = 'Come stai?';
});
jsButtonE.addEventListener('click', () => {
    viewText.innerText = 'Buongiorno!';
});
jsButtonR.addEventListener('click', () => {
    viewText.innerText = 'Buonasera!';
});
jsButtonT.addEventListener('click', () => {
    viewText.innerText = 'Arrivederci!';
});
jsButtonY.addEventListener('click', () => {
    viewText.innerText = 'Grazie!';
});
