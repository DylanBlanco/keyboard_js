// newline.js - aggiunge nuova riga
(function () {
    const view = document.getElementById("view-text");
    const newlineBtn = document.getElementById("newline-btn");

    if (newlineBtn) {
        newlineBtn.addEventListener("click", () => {
        view.innerHTML += "<br>";
        });
    }
})();