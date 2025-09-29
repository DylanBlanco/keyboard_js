// backspace.js - rimuove l'ultima parola o l'ultimo spazio
(function () {
  const view = document.getElementById("view-text");
  const backBtn = document.getElementById("btn-backspace");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // prendo solo il testo (ignora <br>)
      let text = view.innerText.trim();

      // divido in parole
      let words = text.split(/\s+/);

      // rimuovo l'ultima parola
      words.pop();

      // riscrivo il contenuto (mantiene solo testo)
      view.innerText = words.join(" ");
    });
  }
})();

