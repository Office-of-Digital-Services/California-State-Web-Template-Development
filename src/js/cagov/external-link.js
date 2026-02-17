//@ts-check
/* EXTERNAL LINK ICON DECORATION */
(function () {
  const externalClass = "cagov-external-link";

  /**
   * Check for developer override attributes.
   * @param {HTMLAnchorElement} link
   * @returns {"skip"|"force"|null}
   */
  function getOverride(link) {
    const val = link.dataset.cagovExternal;
    return val === "skip" || val === "force" ? val : null;
  }

  /**
   * Determine whether a link points to an external origin.
   * @param {HTMLAnchorElement} link
   * @returns {boolean}
   */
  function isExternalLink(link) {
    const href = link.href;
    if (!href) return false;
    try {
      const url = new URL(href, window.location.origin);
      return url.origin !== "null" && url.origin !== window.location.origin;
    } catch {
      return false;
    }
  }

  /**
   * Check whether a link contains elements that should prevent decoration.
   * @param {HTMLAnchorElement} link
   * @returns {boolean}
   */
  const hasForbiddenChildren = link =>
    !!link.querySelector("img, [class*='ca-gov-logo'], [class*='ca-gov-icon']");

  /**
   * Decorate a single external link.
   * @param {HTMLAnchorElement} link
   */
  function decorateExternalLink(link) {
    const override = getOverride(link);

    if (override === "skip") return;

    const treatAsExternal = override === "force";
    const isExternal = treatAsExternal || isExternalLink(link);

    if (!isExternal || hasForbiddenChildren(link)) return;

    link.classList.add(externalClass);

    const sr = document.createElement("span");
    sr.classList.add("sr-only");
    sr.lang = "en-US";
    sr.textContent = "(external link)";
    link.appendChild(sr);
  }

  /**
   * Scan a DOM subtree for links and decorate them.
   * @param {ParentNode} [root]
   */
  function scanForExternalLinks(root = document) {
    root
      .querySelectorAll(`a[href]:not(.${externalClass})`)
      .forEach(decorateExternalLink);
  }

  document.addEventListener("DOMContentLoaded", () => {
    scanForExternalLinks();
  });

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
