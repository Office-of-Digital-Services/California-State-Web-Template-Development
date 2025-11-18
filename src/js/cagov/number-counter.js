//@ts-check

/**
 * @typedef {Object} ScrollCounter_Properties
 * @property {boolean} counterAlreadyFired
 * @property {number} counterSpeed
 * @property {number} counterTarget
 * @property {number} counterCount
 * @property {number} counterStep
 * @property {()=>void} updateCounter
 * @typedef {HTMLElement & ScrollCounter_Properties} ScrollCounter
 */

document.addEventListener("DOMContentLoaded", () => {
  // You can change this class to specify which elements are going to behave as counters.
  /** @type {NodeListOf<ScrollCounter>} */
  const elements = document.querySelectorAll(".scroll-counter");

  elements.forEach(item => {
    const duration = Number(item.getAttribute("data-counter-time")); // total time in ms
    const target = +item.textContent; // final number
    const start = performance.now(); // high-resolution start time

    const animate = now => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1); // clamp 0–1
      const current = Math.ceil(progress * target);

      item.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  });

  // Function to determine if an element is visible in the web page
  const isElementVisible = (/** @type {Element} */ el) => {
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top + scroll;
    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight
    };
    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight
    };
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };

  // Funciton that will get fired uppon scrolling
  const handleScroll = () => {
    elements.forEach(item => {
      if (item.counterAlreadyFired) return;
      if (!isElementVisible(item)) return;
      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };

  // Fire the function on load and scroll
  window.addEventListener("load", handleScroll);
  window.addEventListener("scroll", handleScroll);
});
