
const viewText = document.getElementById('view-text');

alphabetMessages.forEach(item => {
    const btn = document.querySelector(`.js-button-${item.letter}`);
    if (btn) {
        btn.addEventListener('click', () => {
            // aggiunge il testo invece di sostituirlo
            viewText.innerHTML += item.message + ' / ';
        });
    }
});