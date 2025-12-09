class CagovUtilityMenuToggle {
  constructor() {
    this.menuButton = document.querySelector(".cagov-utility-menu-button");
    this.menuContent = document.getElementById("cagov-utility-menu");
    this.searchContent = document.getElementById("cagov-utility-search");
    if (this.menuButton && this.menuContent) {
      this.menuButton.addEventListener("click", () => this.toggleMenu());
    }
  }

  toggleMenu() {
    const expanded = this.menuButton.getAttribute("aria-expanded") === "true";
    this.menuButton.setAttribute("aria-expanded", !expanded);
    if (expanded) {
      this.menuContent.setAttribute("hidden", "hidden");
    } else {
      this.menuContent.removeAttribute("hidden");
      // Hide search if open
      if (this.searchContent && !this.searchContent.hasAttribute("hidden")) {
        this.searchContent.setAttribute("hidden", "hidden");
        const searchButton = document.querySelector(
          ".cagov-utility-search-button"
        );
        if (searchButton) {
          searchButton.setAttribute("aria-expanded", "false");
          searchButton.classList.remove("rotating");
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CagovUtilityMenuToggle();
});

class CagovUtilitySearchToggle {
  constructor() {
    this.searchButton = document.querySelector(".cagov-utility-search-button");
    this.searchContent = document.getElementById("cagov-utility-search");
    this.menuContent = document.getElementById("cagov-utility-menu");
    if (this.searchButton && this.searchContent) {
      this.searchButton.addEventListener("click", () => this.toggleSearch());
    }
  }

  toggleSearch() {
    const expanded = this.searchButton.getAttribute("aria-expanded") === "true";
    this.searchButton.setAttribute("aria-expanded", !expanded);
    if (expanded) {
      this.searchContent.setAttribute("hidden", "hidden");
    } else {
      this.searchContent.removeAttribute("hidden");
      // Hide menu if open
      if (this.menuContent && !this.menuContent.hasAttribute("hidden")) {
        this.menuContent.setAttribute("hidden", "hidden");
        const menuButton = document.querySelector(".cagov-utility-menu-button");
        if (menuButton) {
          menuButton.setAttribute("aria-expanded", "false");
        }
      }
    }
    setTimeout(() => {
      this.searchButton.classList.toggle("rotating");
    }, 10);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CagovUtilitySearchToggle();
});

class CagovUtilityMenuFocusOut {
  constructor() {
    this.menuButton = document.querySelector(".cagov-utility-menu-button");
    this.menuContent = document.getElementById("cagov-utility-menu");
    this.searchButton = document.querySelector(".cagov-utility-search-button");
    if (this.menuContent && this.menuButton) {
      this.menuContent.addEventListener("focusout", e =>
        this.handleFocusOut(e)
      );
      this.menuButton.addEventListener("focusout", e => this.handleFocusOut(e));
    }
  }

  handleFocusOut(event) {
    const relatedTarget = event.relatedTarget;
    // Get all focusable elements inside menuContent
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])'
    ];
    const focusableElements = Array.from(
      this.menuContent.querySelectorAll(focusableSelectors.join(","))
    ).filter(el => el.offsetParent !== null);

    // If focus moves outside menuButton, menuContent, or searchButton, close menu
    if (
      !this.menuButton.contains(relatedTarget) &&
      !this.menuContent.contains(relatedTarget) &&
      !this.searchButton.contains(relatedTarget)
    ) {
      this.menuContent.setAttribute("hidden", "hidden");
      this.menuButton.setAttribute("aria-expanded", "false");
      return;
    }

    // If focus leaves the last focusable element in menuContent, close menu
    if (
      focusableElements.length > 0 &&
      event.target === focusableElements[focusableElements.length - 1]
    ) {
      if (!this.menuContent.contains(relatedTarget)) {
        this.menuContent.setAttribute("hidden", "hidden");
        this.menuButton.setAttribute("aria-expanded", "false");
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CagovUtilityMenuFocusOut();
});

class CagovUtilitySearchFocusOut {
  constructor() {
    this.searchButton = document.querySelector(".cagov-utility-search-button");
    this.searchContent = document.getElementById("cagov-utility-search");
    this.menuButton = document.querySelector(".cagov-utility-menu-button");
    if (this.searchContent && this.searchButton) {
      this.searchContent.addEventListener("focusout", e =>
        this.handleFocusOut(e)
      );
      this.searchButton.addEventListener("focusout", e =>
        this.handleFocusOut(e)
      );
    }
  }

  handleFocusOut(event) {
    const relatedTarget = event.relatedTarget;
    // Only keep open if focus moves to menu button or search button itself
    if (
      !this.menuButton.contains(relatedTarget) &&
      !this.searchButton.contains(relatedTarget) &&
      !this.searchContent.contains(relatedTarget)
    ) {
      this.searchContent.setAttribute("hidden", "hidden");
      this.searchButton.setAttribute("aria-expanded", "false");
      this.searchButton.classList.remove("rotating");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CagovUtilitySearchFocusOut();
});
