// random.js - aggiunge un messaggio casuale
(function () {
    const view = document.getElementById("view-text");
    const randomBtn = document.getElementById("btn-random");

    if (randomBtn) {
        randomBtn.addEventListener("click", () => {
        const randX = Math.floor(Math.random() * alphabetMessages.length);
        // view.innerHTML += " " + alphabetMessages[randX].message;
        view.innerHTML += alphabetMessages[randX].message;
        });
    }
})();