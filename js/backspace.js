// backspace.js - rimuove ultima parola o ultima riga se vuota
(function () {
    const view = document.getElementById("view-text");
    const backBtn = document.getElementById("btn-backspace");

    if (backBtn) {
        backBtn.addEventListener("click", () => {
        // Prendi l'HTML e spezza in righe
        let lines = view.innerHTML.split(/<br\s*\/?>/i);

        if (lines.length === 0) return;

        // Ultima riga
        let lastLine = lines[lines.length - 1].trim();

        if (lastLine === "") {
            // Se è vuota, elimina direttamente la riga
            lines.pop();
        } else {
            // Altrimenti rimuovi l'ultima parola della riga
            let words = lastLine.split(/\s+/);
            words.pop();
            lines[lines.length - 1] = words.join(" ");
        }

        // Ricostruisci con i <br>
        view.innerHTML = lines.join("<br>");
        });
    }
})();