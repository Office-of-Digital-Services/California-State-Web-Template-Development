window.addEventListener("DOMContentLoaded", () => {
  //POLYFILL for CSS nesting
  if (!CSS.supports("selector(&)")) {
    // If CSS nesting not supported load alternative CSS file
    const link = /** @type {HTMLLinkElement} */ (
      document.getElementById("main-stylesheet")
    );
    if (link) {
      link.href = link.href.replace("min", "flat");
      console.log("POLYFILL: Using FLAT CSS instead of Nested");
    }
  }
});
