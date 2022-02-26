document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".front");

  const observer = new IntersectionObserver(
    (entries) => {
      (function () {
        for (const entry of entries) {
          entry.target.classList.toggle("fade-out", !entry.isIntersecting);
          entry.target.classList.toggle("fade-in", entry.isIntersecting);
        }
      })();
    },
    { threshold: 0.5 }
  );

  for (const card of cards) {
    observer.observe(card);
  }
});
