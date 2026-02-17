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
    // Skip if the link contains an <img>
    if (link.querySelector("img")) return true;

    // Skip if the link contains any .ca-gov-logo* or .ca-gov-icon*
    if (link.querySelector("[class^='ca-gov-logo'], [class^='ca-gov-icon']")) {
      return true;
    }

    return false;
  }

  function decorateExternalLink(link) {
    if (link.dataset.cagovExternalDecorated === "true") return;
    if (!isExternalLink(link)) return;

    // NEW: skip links with forbidden children
    if (hasForbiddenChildren(link)) return;

    // Add class for CSS icon
    link.classList.add("cagov-external-link");

    // Add screen-reader text (translatable)
    const sr = document.createElement("span");
    sr.classList.add("sr-only");
    sr.textContent = "(external link)";
    link.appendChild(sr);

    link.dataset.cagovExternalDecorated = "true";
  }

  function scanForExternalLinks(root = document) {
    root.querySelectorAll("a[href]").forEach(decorateExternalLink);
  }

  document.addEventListener("DOMContentLoaded", () => {
    scanForExternalLinks();
  });

  // MutationObserver for AJAX/React/Eleventy
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        if (node.tagName === "A") {
          decorateExternalLink(node);
        }

        node.querySelectorAll?.("a[href]").forEach(decorateExternalLink);
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Optional event hook for frameworks
  window.addEventListener("cagov:content-updated", () => {
    scanForExternalLinks();
  });
})();
