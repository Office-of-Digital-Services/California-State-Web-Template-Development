//@ts-check
document.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLDetailsElement} */
  const menu = document.querySelector("details.cagov-utility-menu-button");

  /** @type {HTMLDivElement} */
  const dropdown = document.querySelector("div.collapsible-content");

  /** @type {HTMLDetailsElement} */
  const menu2 = document.querySelector("details.cagov-utility-search-button");

  /** @type {HTMLDivElement} */
  const dropdown2 = document.querySelector("div.cagov-search");

  const checkMenus = () => {
    dropdown.style.display = menu.open ? "block" : "none";
    dropdown2.style.display = menu2.open ? "block" : "none";
  };

  [menu, menu2].forEach(x =>
    x.addEventListener("toggle", () => {
      checkMenus();
    })
  );

  checkMenus();

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
