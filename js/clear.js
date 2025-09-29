// clear.js - resetta lo screen
(function () {
    const view = document.getElementById("view-text");
    const clearBtn = document.getElementById("clear-btn");

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
        view.innerHTML = "";
        });
    }
})();