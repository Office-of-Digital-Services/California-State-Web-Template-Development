//@ts-check

/* EXTERNAL LINK ICON */
(function () {
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

  function hasForbiddenChildren(link) {
    if (link.querySelector("img")) return true;
    if (link.querySelector("[class^='ca-gov-logo'], [class^='ca-gov-icon']")) {
      return true;
    }
    return false;
  }

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

  function scanForExternalLinks(root = document) {
    root.querySelectorAll("a[href]").forEach(decorateExternalLink);
  }

  // ⭐ Fires after Eleventy dev server rewrites the document
  document.addEventListener("DOMContentLoaded", () => {
    scanForExternalLinks();
  });

  // ⭐ Handles real DOM mutations (AJAX, React, Alpine, etc.)
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
