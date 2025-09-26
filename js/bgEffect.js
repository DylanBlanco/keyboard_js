// ===== bgEffect.js =====
// Effetto background con zoom + parallax in JS puro

(function() {
    const bg = document.createElement('div');
    bg.id = 'bg-effect';
    document.body.prepend(bg); // lo aggiunge come primo elemento del body

    // IMMAGINE DI SFONDO (cambia percorso se vuoi)
    const imageUrl = './assets/bg.jpg';
    bg.style.backgroundImage = `url("${imageUrl}")`;

    // Stili di base via JS (puoi anche spostarli in CSS)
    Object.assign(bg.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '-1',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transformOrigin: 'center center',
        willChange: 'transform, filter'
    });

    // Parametri effetto
    const zoomMin = 1.03;     // scala minima
    const zoomMax = 1.15;     // scala massima
    const zoomSpeed = 0.00004; // velocità zoom (più alto = più veloce)
    const parallaxIntensity = 20; // pixel di spostamento max col mouse

    let lastTime = performance.now();
    let zoom = zoomMin;
    let zoomDirection = 1;

    // valori parallax
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        mouseX = (e.clientX / w) - 0.5;
        mouseY = (e.clientY / h) - 0.5;
    });

    // riduci movimento su touch
    window.addEventListener('touchstart', () => {
        mouseX = 0;
        mouseY = 0;
    });

    // animazione con requestAnimationFrame
    function animate(now) {
        const dt = now - lastTime;
        lastTime = now;

        // aggiorna zoom oscillante
        zoom += zoomDirection * zoomSpeed * dt;
        if (zoom >= zoomMax) { zoom = zoomMax; zoomDirection = -1; }
        if (zoom <= zoomMin) { zoom = zoomMin; zoomDirection = 1; }

        // parallax: traslazione in base al mouse
        const offsetX = -mouseX * parallaxIntensity;
        const offsetY = -mouseY * parallaxIntensity;

        bg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

        // opzionale: effetto blur/saturazione
        const blur = (zoom - zoomMin) * 20;
        const saturate = 1 + (zoom - zoomMin) * 1.5;
        bg.style.filter = `blur(${blur}px) saturate(${saturate})`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // funzione globale per cambiare immagine da altri script
    window.setBackgroundImage = function(url) {
        const img = new Image();
        img.onload = () => {
            bg.style.transition = 'background-image 0.4s ease';
            bg.style.backgroundImage = `url("${url}")`;
            setTimeout(() => bg.style.transition = '', 500);
        };
        img.src = url;
    };
})();
