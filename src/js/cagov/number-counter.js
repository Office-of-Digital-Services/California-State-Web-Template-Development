//@ts-check

/**
 * @typedef {Object} ScrollCounter_Properties
 * @property {boolean} counterAlreadyFired
 * @property {()=>void} updateCounter
 * @typedef {HTMLElement & ScrollCounter_Properties} ScrollCounter
 */

document.addEventListener("DOMContentLoaded", () => {
  /** @type {NodeListOf<ScrollCounter>} */
  const elements = document.querySelectorAll(".scroll-counter");

  elements.forEach(item => {
    item.counterAlreadyFired = false;

    const duration = Number(item.getAttribute("data-counter-time")); // ms
    const target = +item.textContent; // final number

    item.updateCounter = () => {
      const start = performance.now();

      const animate = now => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.ceil(progress * target);

        item.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };
  });

  // Check if element is visible in viewport
  const isElementVisible = el => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  // Scroll handler
  const handleScroll = () => {
    elements.forEach(item => {
      if (item.counterAlreadyFired) return;
      if (!isElementVisible(item)) return;

      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };

  // Fire once on load and on scroll
  window.addEventListener("load", handleScroll);
  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
  });
});
