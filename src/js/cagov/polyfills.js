window.addEventListener("DOMContentLoaded", () => {
  //POLYFILL for CSS nesting and media query range notation
  if (!CSS.supports("selector(&)") || !CSS.supports("(width >= 0px)")) {
    console.log(
      "POLYFILL: Nested CSS and madia query range notation (<, <=, >, >=) are not supported "
    );
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
