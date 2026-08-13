//@ts-check

/**
 * Polyfill to support grouping <details> elements via the NAME property.
 * Safari 16.5 and earlier do not support details.name
 */
function detailsNamePolyfill() {
  const test = document.createElement("details");
  test.setAttribute("name", "x");
  const supportsName = test.name === "x";

  if (!supportsName) {
    const accordions = document.querySelectorAll("details[name]");
    accordions.forEach(details => {
      const detailsElement = /** @type {HTMLDetailsElement} */ (details);
      detailsElement.addEventListener("toggle", () => {
        if (detailsElement.open) {
          accordions.forEach(other => {
            const otherElement = /** @type {HTMLDetailsElement} */ (other);
            if (
              otherElement.open &&
              otherElement !== detailsElement &&
              otherElement.getAttribute("name") ===
                detailsElement.getAttribute("name")
            ) {
              otherElement.open = false;
              console.log("POLYFILL: details.name closed");
            }
          });
        }
      });
    });
  }
}

/**
 * Toggle aria-expanded attribute on all details elements in the button group.
 */
function cagovUtilityHeaderAccessibilityToggle() {
  const detailsToggles = document.querySelectorAll(
    'details[name="cagov-utility-header__buttongroup"]'
  );

  detailsToggles.forEach(detailsToggle => {
    const detailsElement = /** @type {HTMLDetailsElement} */ (detailsToggle);
    if (!detailsElement.hasAttribute("aria-expanded")) {
      detailsElement.setAttribute("aria-expanded", "false");
    }

    detailsElement.addEventListener("toggle", () => {
      const isOpen = detailsElement.hasAttribute("open");
      detailsElement.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}

/**
 * Initialize component.
 */
function initCagovUtilityHeader() {
  detailsNamePolyfill();
  cagovUtilityHeaderAccessibilityToggle();
}

// Initialize when DOM is ready.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCagovUtilityHeader);
} else {
  // DOM already loaded (framework hydration, dynamic insertion, etc.)
  initCagovUtilityHeader();
}

// Export for framework usage (e.g., React, Vue).
if (typeof window !== "undefined") {
  window.detailsNamePolyfill = detailsNamePolyfill;
  window.cagovUtilityHeaderAccessibilityToggle =
    cagovUtilityHeaderAccessibilityToggle;
  window.initCagovUtilityHeader = initCagovUtilityHeader;
}
