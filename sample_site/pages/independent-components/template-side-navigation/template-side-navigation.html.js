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
      details.addEventListener("toggle", () => {
        if (details.open) {
          accordions.forEach(other => {
            if (
              other.open &&
              other !== details &&
              other.getAttribute("name") === details.getAttribute("name")
            ) {
              other.open = false;
              console.log("POLYFILL: details.name closed");
            }
          });
        }
      });
    });
  }
}

/**
 * Toggle aria-expanded attribute on details element
 */
function templateSideNavigationToggle() {
  const detailsToggle = document.querySelector(
    "[aria-controls='template-side-navigation-content']"
  );
  if (!detailsToggle) return;

  // Check if aria-expanded exists, if not, set it to false
  if (!detailsToggle.hasAttribute("aria-expanded")) {
    detailsToggle.setAttribute("aria-expanded", "false");
  }

  // Listen for toggle event and update aria-expanded
  detailsToggle.closest("details")?.addEventListener("toggle", () => {
    const isOpen = detailsToggle.closest("details")?.hasAttribute("open");
    detailsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/**
 * Initialize component
 */
function initTemplateSideNavigation() {
  detailsNamePolyfill();
  templateSideNavigationToggle();
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTemplateSideNavigation);
} else {
  // DOM already loaded (framework hydration, dynamic insertion, etc.)
  initTemplateSideNavigation();
}

// Export for framework usage (e.g., React, Vue)
if (typeof window !== "undefined") {
  window.detailsNamePolyfill = detailsNamePolyfill;
  window.templateSideNavigationToggle = templateSideNavigationToggle;
  window.initTemplateSideNavigation = initTemplateSideNavigation;
}
