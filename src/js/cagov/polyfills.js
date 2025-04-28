window.addEventListener("DOMContentLoaded", () => {
  //POLYFILL for CSS nesting
  if (!CSS.supports("selector(&)")) {
    console.log("POLYFILL: Nested CSS not supported");
    // If CSS nesting not supported load alternative CSS file
    const link = /** @type {HTMLLinkElement} */ (
      document.querySelector(
        "link[rel='stylesheet'][href*='cagov.core.min.css']"
      )
    );
    if (link) {
      link.removeAttribute("integrity");
      link.href = link.href.replace("min", "flat");

      console.log(`POLYFILL: Using new CSS file - ${link.href}`);
    }
  }
});
