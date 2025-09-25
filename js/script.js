// Import del file alphabetMessages.js
import alphabetMessages from './alphabetMessages.js';

const viewText = document.getElementById('view-text');

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
