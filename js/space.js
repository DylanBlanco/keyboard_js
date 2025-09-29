// space.js - aggiunge spazio
(function () {
    const view = document.getElementById("view-text");
    const spaceBtn = document.querySelector(".js-button-space");

    if (spaceBtn) {
        spaceBtn.addEventListener("click", () => {
        view.innerHTML += " ";
        });
    }
})();