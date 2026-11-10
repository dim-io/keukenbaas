// Zet data-inview op elementen met [data-animate] zodra ze voor het eerst in beeld komen.
// Het attribuut blijft daarna staan: een animatie speelt één keer en blijft in de eindstaat.
// Uit beeld scrollen zet niets terug. Opnieuw afspelen gebeurt alleen op verzoek van de bezoeker (klik).
// Stuurt één keer een bubbling event "inviewchange" ({ detail: { inview: true } }).
// Elementen binnen [data-defer] (bijv. tabbladen die nog niet open staan) start het eigen component zelf.
const targets = [...document.querySelectorAll('[data-animate]')].filter((el) => !el.closest('[data-defer]'));

function activate(el) {
  if (el.hasAttribute('data-inview')) return;
  el.setAttribute('data-inview', '');
  el.dispatchEvent(new CustomEvent('inviewchange', { bubbles: true, detail: { inview: true } }));
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // Hoge elementen (groter dan het scherm) starten zodra er een flink stuk in beeld is,
        // niet pas bij 20% van hun eigen hoogte.
        const enough = Math.min(entry.boundingClientRect.height * 0.2, window.innerHeight * 0.25);
        if (entry.intersectionRect.height >= enough) {
          activate(entry.target);
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.3], rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach(activate);
}
