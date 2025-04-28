window.addEventListener("DOMContentLoaded", () => {
  const csscorelink = /** @type {HTMLcsscorelinkElement} */ (
    document.querySelector("link[rel='stylesheet'][href*='cagov.core.min.css']")
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
      csscorelink.href = csscorelink.href.replace("min", "flat");
    }
  }

  // POLYFILL for CSS nesting and media query range notation
  /**
   * Checks if CSS nesting is supported by the browser.
   */
  if (!CSS.supports("selector(&)")) {
    console.log("POLYFILL: Nested CSS is not supported");

    if (csscorelink) {
      // Remove the integrity attribute to avoid CORS issues
      csscorelink.removeAttribute("integrity");
      loadAlternativeCSS();
      console.log(`POLYFILL: Using new CSS file - ${csscorelink.href}`);
    }
  }

  /**
   * Checks if media queries are supported by the browser.
   */
  if (!mediaQueriesSupported() || !testMediaQueryRangeNotation()) {
    console.log(
      "POLYFILL: Media query range notation (<, <=, >, >=) is not supported."
    );
    if (csscorelink) {
      // Remove the integrity attribute to avoid CORS issues
      csscorelink.removeAttribute("integrity");
      loadAlternativeCSS();
      console.log(`POLYFILL: Using new CSS file - ${csscorelink.href}`);
    }
  }
});
