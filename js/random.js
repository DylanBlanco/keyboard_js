// random.js - aggiunge un messaggio casuale
(function () {
    const view = document.getElementById("view-text");
    const randomBtn = document.getElementById("btn-random");

    if (randomBtn) {
        randomBtn.addEventListener("click", () => {
        const idx = Math.floor(Math.random() * alphabetMessages.length);
        view.innerHTML += " " + alphabetMessages[idx].message;
        });
    }
})();