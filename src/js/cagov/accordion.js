//@ts-check

window.addEventListener("load", () => {
  /**
   * Accordion web component that collapses and expands content inside itself on click.
   *
   * @element cagov-accordion
   *
   *
   * @fires click - Default events which may be listened to in order to discover most popular accordions
   *
   * @attr {string} open - set on the internal details element
   * If this is true the accordion will be open before any user interaction.
   *
   * @cssprop --primary-700 - Default value of #165ac2, used for all colors of borders and fills
   * @cssprop --primary-900 - Default value of #003588, used for background on hover
   *
   */
  class CaGovAccordion extends HTMLElement {
    connectedCallback() {
      this.summaryEl = this.querySelector("summary");
      this.detailsEl = this.querySelector("details");
      this.bodyEl = this.querySelector(".accordion-body");

      if (!this.summaryEl || !this.detailsEl || !this.bodyEl) {
        return;
      }

      // trigger the opening and closing height change animation on summary click

      this.setHeight();
      this.detailsEl.addEventListener("toggle", this.setHeight.bind(this));
      this.summaryEl.insertAdjacentHTML(
        "beforeend",
        `<div class="cagov-open-indicator" aria-hidden="true" />`
      );

      window.addEventListener(
        "resize",
        this.debounce(this.setHeight).bind(this)
      );
    }

    setHeight() {
      window.requestAnimationFrame(() => {
        // delay so the desired height is readable in all browsers
        this.closedHeightInt = this.summaryEl.scrollHeight + 2;
        this.closedHeight = `${this.closedHeightInt}px`;

        // Apply the height that matches the current open state.
        if (this.detailsEl.hasAttribute("open")) {
          this.detailsEl.style.height = `${
            this.bodyEl.scrollHeight + this.closedHeightInt
          }px`;
        } else {
          this.detailsEl.style.height = this.closedHeight;
        }
      });
    }

    /**
     * @param {function} func
     */
    debounce(func, timeout = 300) {
      let timer;
      return (/** @type {any} */ ...args) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }
  }

  window.customElements.define("cagov-accordion", CaGovAccordion);
});
