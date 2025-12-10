//@ts-check
document.addEventListener("DOMContentLoaded", () => {
  // Polyfill for details element to allow only one open at a time per name attribute
  /** @type {NodeListOf<HTMLDetailsElement>} */
  const accordions = document.querySelectorAll("details[name]");
  accordions.forEach(details => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        accordions.forEach(other => {
          if (
            other.open &&
            other !== details &&
            other.getAttribute("name") === details.getAttribute("name")
          ) {
            other.open = false;
            console.log("POLYFILL: details closed");
          }
        });
      }
    });
  });
});
