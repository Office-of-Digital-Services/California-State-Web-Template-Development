//@ts-check

window.addEventListener("load", () => {
  /** @type {HTMLButtonElement} */
  const navToggleBtn = document.querySelector(".toggle-menu");
  if (!navToggleBtn) return;
  /** @type {HTMLDivElement} */
  const navSearchCont = document.querySelector(".navigation-search");
  if (!navSearchCont) return;
  /** @type {HTMLElement} */
  const mainNav = document.querySelector(".main-navigation");
  // create container for drawer mobile nav items
  const mobileItemsCont = document.createElement("div");
  mobileItemsCont.className = "nav-drawer";

  // Create close mobile meu button
  const navMobileMenuToggleBtn = document.createElement("button");
  navMobileMenuToggleBtn.type = "button";
  navMobileMenuToggleBtn.classList.add("mobile-control", "toggle-menu");
  navMobileMenuToggleBtn.ariaExpanded = "false";
  navMobileMenuToggleBtn.setAttribute("aria-controls", "navigation");
  navMobileMenuToggleBtn.tabIndex = -1;

  const navCloseBtnSpans = [0, 1, 2, 3, 4].map(() =>
    document.createElement("span")
  );

  navCloseBtnSpans[4].classList.add("sr-only");
  navCloseBtnSpans[4].innerText = "Menu";
  navMobileMenuToggleBtn.append(...navCloseBtnSpans);
  mobileItemsCont.append(navMobileMenuToggleBtn);

  const mobileCntls = document.querySelector(".global-header .mobile-controls");

  //Used for hiding/showing main elements
  const mainElements = document.querySelectorAll(
    ".main-content, footer, .site-footer, .utility-header, .branding"
  );

  const regularHeader = document.querySelector("header");

  // Begin Function Definitions
  const isDesktopWidth = () =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--is-mobile")
      .trim() === "0";

  // reset navigation function
  const NavReset = () => {
    //RESET
    document
      .querySelectorAll(".first-level-btn")
      .forEach(el => (el.ariaExpanded = "false")); //Must be false and not blank for CSS

    document.querySelectorAll(".sub-nav").forEach(el => {
      el.ariaHidden = "true";
      el.classList.remove("open");
    });

    document
      .querySelectorAll(".second-level-link")
      .forEach((/**@type {HTMLElement} */ el) => (el.tabIndex = -1));

    document
      .querySelectorAll(".rotate")
      .forEach(
        (/**@type {HTMLElement} */ el) =>
          (el.style.display = isDesktopWidth() ? "none" : "block")
      );

    const targetAriaHidden = isDesktopWidth() ? null : "true";

    if (navSearchCont.ariaHidden != targetAriaHidden)
      navSearchCont.ariaHidden = targetAriaHidden;
  };

  const getAllNavLinks = () =>
    /** @type { NodeListOf<HTMLElement>} */ (
      navSearchCont.querySelectorAll(
        'a.first-level-link, button.first-level-btn, input, button, [tabindex]:not([tabindex="-1"])'
      )
    );

  const getAllFirstLevelNavLinks = () =>
    /** @type { NodeListOf<HTMLElement>} */ (
      navSearchCont.querySelectorAll(
        "a.first-level-link, button.first-level-btn"
      )
    );

  // Button click open menu function
  const openMenu = () => {
    navSearchCont.classList.add("visible");
    navSearchCont.classList.remove("not-visible");
    document.body.classList.add("overflow-hidden");
    navToggleBtn.ariaExpanded = "true";
    navMobileMenuToggleBtn.ariaExpanded = "true";
    navSearchCont.ariaHidden = null;
    // make links focusable
    getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
    // desktop
    const mobileControlsDisplay = mobileCntls
      ? window.getComputedStyle(mobileCntls).display
      : "";
    if (
      mobileControlsDisplay !== "block" &&
      navToggleBtn.ariaExpanded !== "false"
    ) {
      navToggleBtn.ariaExpanded = "false";
    }
    // Hide all the website areas (add aria-hidden)
    mainElements.forEach(x => (x.ariaHidden = "true"));

    regularHeader?.classList.add("nav-overlay");
    navMobileMenuToggleBtn.focus();
  };

  // Button click close menu function
  const closeMenu = () => {
    if (navSearchCont.classList.contains("visible")) {
      navSearchCont.classList.remove("visible");

      //Set focus only when close actually happens
      navToggleBtn.focus();
    }

    navSearchCont.classList.add("not-visible");

    if (navToggleBtn.ariaExpanded !== "false") {
      navToggleBtn.ariaExpanded = "false";
    }
    if (navMobileMenuToggleBtn.ariaExpanded !== "false") {
      navMobileMenuToggleBtn.ariaExpanded = "false";
    }
    if (mainNav) document.body.classList.remove("overflow-hidden");

    // removing focus
    getAllNavLinks().forEach(el => (el.tabIndex = -1));
    // remove aria hidden for the rest of the site
    mainElements.forEach(x => (x.ariaHidden = null));
    regularHeader?.classList.remove("nav-overlay");

    NavReset();
  };

  const mobileCheck = () => {
    const searchInput = document.querySelector(".search-textfield");
    if (!searchInput) return;

    // Add a focus event listener to add the class on focus
    searchInput.addEventListener("focus", () => {
      searchInput.classList.add("is-in-focus");
    });

    // Add a blur event listener to remove the class on blur
    searchInput.addEventListener("blur", () => {
      // Remove the class after a delay
      setTimeout(() => {
        searchInput.classList.remove("is-in-focus");
      }, 500);
    });

    if (!searchInput.classList.contains("is-in-focus")) {
      NavReset();
      // desktop
      if (isDesktopWidth()) {
        getAllFirstLevelNavLinks().forEach(el =>
          el.removeAttribute("tabindex")
        );
      }
      // mobile
      else {
        getAllFirstLevelNavLinks().forEach(el => (el.tabIndex = -1));
        closeMenu();
      }
    }
  };

  // End Function Definitions

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (navSearchCont.classList.contains("visible")) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeMenu();
      }
    }
  });

  // Close menu on focusout (tabbing out) event (if target is outside of mobile menu and ignore if focus target is navToggleBtn button)
  navSearchCont.addEventListener("focusout", e => {
    if (!isDesktopWidth()) {
      const child = /** @type {Node} **/ (e.relatedTarget);
      const parent = /** @type {Node} **/ (e.currentTarget);

      if (child && !parent.contains(child)) {
        closeMenu();
      }
    }
  });

  // Button Click event
  navToggleBtn.addEventListener("click", openMenu);
  // Button Click event
  navMobileMenuToggleBtn.addEventListener("click", closeMenu);

  // Close mobile nav if click outside of nav
  regularHeader.addEventListener("mouseup", e => {
    // if the target of the click isn't the navigation container nor a descendant of the navigation
    if (!isDesktopWidth()) {
      if (
        navSearchCont !== e.target &&
        !navSearchCont?.contains(/**@type {Node} */ (e.target))
      ) {
        closeMenu();
      }
    }
  });

  // on resize function (hide mobile nav)
  window.addEventListener("resize", mobileCheck);

  // ONLOAD
  // move duplicated logo to navigation drawer section
  document.querySelector(".navigation-search")?.prepend(mobileItemsCont);
  mobileCheck();
});
