//@ts-check

/* EXTERNAL LINK ICON */
window.addEventListener("load", () => {
  const ext =
    '<span class="external-link-icon" aria-hidden="true"></span><span class="sr-only">(external link)</span>';
  /**
   * Check if link is external
   * @param {HTMLAnchorElement} linkElement
   */
  function linkIsExternal(linkElement) {
    return window.location.host.indexOf(linkElement.host) > -1;
  }

  const cssExceptions = `:not(code *):not(.cagov-logo)`;

  /**
   * Decorate a single link if needed
   * @param {HTMLAnchorElement} linkElement
   */
  function decorateLink(linkElement) {
    const href = linkElement.getAttribute("href") || "";
    const anchorLink = href.startsWith("#");
    const localHost = href.includes("localhost");
    const localEmail = href.includes("@");

    // only decorate if the ext icon isn't already present.
    if (linkElement.querySelector(".external-link-icon")) {
      //return;
    }

    if (
      !linkIsExternal(linkElement) &&
      !anchorLink &&
      !localEmail &&
      !localHost
    ) {
      console.log("decorateLink", {
        href,
        anchorLink,
        localHost,
        localEmail
      });
      linkElement.insertAdjacentHTML("beforeend", ext);
    }
  }

  /** Initial run */
  /** @type {NodeListOf<HTMLAnchorElement>} */
  (
    document.querySelectorAll(
      `main a${cssExceptions}, .agency-footer a${cssExceptions}, .site-footer a${cssExceptions}, footer a${cssExceptions}`
    )
  ).forEach(decorateLink);

  /** Observe DOM changes for AJAX / dynamic content */
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (!(node instanceof HTMLElement)) return;

        if (node instanceof HTMLAnchorElement) {
          decorateLink(node);
          return;
        }

        node.querySelectorAll("a").forEach(link => {
          if (link instanceof HTMLAnchorElement) {
            decorateLink(link);
          }
        });
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
