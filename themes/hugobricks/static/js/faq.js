(function () {
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const summaries = document.querySelectorAll("details summary");

  summaries.forEach(function (summary) {
    const details = summary.parentElement;
    if (!details) return;

    let closeTimer = null;

    summary.addEventListener("click", function (e) {
      if (prefersReducedMotion) {
        return;
      }
      if (details.hasAttribute("open")) {
        e.preventDefault();
        if (details.classList.contains("closing")) return;
        details.classList.add("closing");
        closeTimer = window.setTimeout(function () {
          details.removeAttribute("open");
          details.classList.remove("closing");
          closeTimer = null;
        }, 220);
      }
    });

    details.addEventListener("animationend", function (e) {
      if (e.animationName === "closedetails" && details.classList.contains("closing")) {
        if (closeTimer) {
          window.clearTimeout(closeTimer);
          closeTimer = null;
        }
        details.removeAttribute("open");
        details.classList.remove("closing");
      }
    });
  });
})();
