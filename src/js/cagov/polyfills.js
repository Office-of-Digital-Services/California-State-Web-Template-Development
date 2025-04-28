window.addEventListener("DOMContentLoaded", () => {
  const csscorelink = /** @type {HTMLcsscorelinkElement} */ (
    document.querySelector("link[rel='stylesheet'][href*='cagov.core.']")
  );

  /**
   * Checks if media queries are supported by the browser.
   * @returns {boolean} True if media queries are supported, otherwise false.
   */
  function mediaQueriesSupported() {
    return (
      typeof window.matchMedia != "undefined" ||
      typeof window.msMatchMedia != "undefined"
    );
  }

  /**
   * Tests if media query range notation is supported by the browser.
   * @returns {boolean} True if range notation is supported, otherwise false.
   */
  function testMediaQueryRangeNotation() {
    return window.matchMedia("(width >= 0px)").matches;
  }

  /**
   * Loads an alternative CSS file if CSS nesting or media query range notation is not supported.
   */
  function loadAlternativeCSS() {
    if (csscorelink) {
      csscorelink.removeAttribute("integrity");
      csscorelink.href = csscorelink.href.replace(
        /cagov\.core(\.min)?\.css/,
        "cagov.core.flat.css"
      );
      console.log(`POLYFILL: Using new CSS file - ${csscorelink.href}`);
    }
  }

  // POLYFILL for CSS nesting and media query range notation
  /**
   * Checks if CSS nesting is supported by the browser.
   */
  if (!CSS.supports("selector(&)")) {
    console.log("POLYFILL: Nested CSS is not supported");

    loadAlternativeCSS();
  }

  /**
   * Checks if media queries are supported by the browser.
   */
  if (!mediaQueriesSupported() || !testMediaQueryRangeNotation()) {
    console.log(
      "POLYFILL: Media query range notation (<, <=, >, >=) is not supported."
    );

    loadAlternativeCSS();
  }
});
