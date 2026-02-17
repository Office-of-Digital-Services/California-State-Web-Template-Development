//@ts-check
/* EXTERNAL LINK ICON DECORATION */
(function () {
  /**
   * Determine whether a link points to an external origin.
   * @param {HTMLAnchorElement} link
   * @returns {boolean}
   */
  function isExternalLink(link) {
    const href = link.getAttribute("href");
    if (!href) return false;
    try {
      const url = new URL(href, window.location.origin);
      return url.origin !== window.location.origin;
    } catch {
      return false;
    }
  }

  /**
   * Check whether a link contains elements that should prevent decoration.
   * Forbidden children include:
   * - <img> tags
   * - Elements with classes starting with "ca-gov-logo" or "ca-gov-icon"
   * @param {HTMLAnchorElement} link
   * @returns {boolean}
   */
  function hasForbiddenChildren(link) {
    if (link.querySelector("img")) return true;
    if (link.querySelector("[class^='ca-gov-logo'], [class^='ca-gov-icon']")) {
      return true;
    }
    return false;
  }

  /**
   * Decorate a single external link by:
   * - Adding a CSS class for the decorative SVG icon
   * - Appending a screen‑reader‑only span containing translatable text
   *
   * Decoration is idempotent and will not run twice.
   * @param {HTMLAnchorElement} link
   */
  function decorateExternalLink(link) {
    if (link.dataset.cagovExternalDecorated === "true") return;
    if (!isExternalLink(link)) return;
    if (hasForbiddenChildren(link)) return;

    link.classList.add("cagov-external-link");

    const sr = document.createElement("span");
    sr.classList.add("sr-only");
    sr.textContent = "(external link)";
    link.appendChild(sr);

    link.dataset.cagovExternalDecorated = "true";
  }

  /**
   * Scan a DOM subtree for links and decorate them.
   * @param {ParentNode} [root]
   */
  function scanForExternalLinks(root = document) {
    root.querySelectorAll("a[href]").forEach(decorateExternalLink);
  }

  /**
   * Initial scan after the document is ready.
   * This also fires after Eleventy dev server rewrites the document,
   * because document.write() + document.close() triggers DOMContentLoaded again.
   */
  document.addEventListener("DOMContentLoaded", () => {
    scanForExternalLinks();
  });

  // --- MutationObserver for all DOM update mechanisms ---
  // This includes:
  // - AJAX injections
  // - React/Preact hydration
  // - Alpine.js morphdom patches
  // - Eleventy dev server "HTML delta applied without page reload"
  //
  // morphdom does not always trigger childList mutations,
  // but it *does* trigger attribute and characterData mutations.
  // So we observe all mutation types and debounce the scan.

  /** @type {boolean} */
  let scanScheduled = false;

  const observer = new MutationObserver(() => {
    if (!scanScheduled) {
      scanScheduled = true;
      queueMicrotask(() => {
        scanScheduled = false;
        scanForExternalLinks();
      });
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });
})();
