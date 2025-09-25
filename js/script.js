// Import del file alphabetMessages.js
import alphabetMessages from './alphabetMessages.js';

const viewText = document.getElementById('view-text');

// Ciclo su tutto l’array e aggiungo gli event listener
// alphabetMessages.forEach(item => {
//     const btn = document.querySelector(`.js-button-${item.letter}`);
//     if (btn) {
//         btn.addEventListener('click', () => {
//             viewText.innerHTML += ' ' + item.message;
//         });
//     }
// });