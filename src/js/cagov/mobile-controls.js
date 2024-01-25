//@ts-check

window.addEventListener("load", () => {
  /** @type {HTMLButtonElement} */
  const navToggleBtn = document.querySelector(".toggle-menu");
  if (!navToggleBtn) return;

  // create container for drawer mobile nav items
  const mobileItemsCont = document.createElement("div");
  mobileItemsCont.setAttribute("class", "nav-drawer");

  const navMobileMenuToggleBtn = document.createElement("button");
  navMobileMenuToggleBtn.classList.add("mobile-control");
  navMobileMenuToggleBtn.classList.add("toggle-menu");
  navMobileMenuToggleBtn.setAttribute("aria-expanded", "true");
  navMobileMenuToggleBtn.setAttribute("aria-controls", "navigation");
  navMobileMenuToggleBtn.setAttribute("tabindex", "-1");
  mobileItemsCont.append(navMobileMenuToggleBtn);

  /** @type {HTMLDivElement} */
  const utilityLinks = document.querySelector(".settings-links");
  /** @type {HTMLDivElement} */
  const headerutilityLinksCont = document.querySelector(
    ".utility-header .container .flex-row"
  );
  /** @type {HTMLElement} */
  const mainNav = document.querySelector(".main-navigation");

  // VARIABLES
  /** @type {HTMLDivElement} */
  const navSearchCont = document.querySelector(".navigation-search");
  if (!navSearchCont) return;

  /**
   * True if child is descendant of the parent
   * @param {HTMLElement} parent
   * @param {HTMLElement} child
   * @returns {boolean}
   */
  const checkParent = (parent, child) =>
    child?.parentElement
      ? child.parentElement === parent
        ? true
        : checkParent(parent, child.parentElement)
      : false;

  // reset navigation function
  const NavReset = () => {
    //RESET
    document
      .querySelectorAll(".first-level-btn")
      .forEach(el => el.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".sub-nav").forEach(el => {
      el.setAttribute("aria-hidden", "true");
      el.classList.remove("open");
    });
    document
      .querySelectorAll(".second-level-link")
      .forEach(el => el.setAttribute("tabindex", "-1"));

    if (window.innerWidth <= 991) {
      document
        .querySelectorAll(".rotate")
        .forEach(
          (/**@type {HTMLElement} */ el) => (el.style.display = "block")
        );
    } else {
      document
        .querySelectorAll(".rotate")
        .forEach((/**@type {HTMLElement} */ el) => (el.style.display = "none"));
      document.querySelector("#navigation")?.removeAttribute("aria-hidden");
    }
  };

  const getAllNavLinks = () =>
    navSearchCont.querySelectorAll(
      'a.first-level-link, button.first-level-btn, input, button, [tabindex]:not([tabindex="-1"])'
    );

  // Escape key event fuction
  const addESC = function (e) {
    if (navSearchCont.classList.contains("visible")) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeMenu();
      }
    }
  };

  // Escape key event listener
  document.addEventListener("keydown", addESC);

  const checkIfMobileView = () => {
    const mobileElement = document.querySelector(
      ".global-header .mobile-controls"
    );
    return mobileElement
      ? getComputedStyle(mobileElement)["display"] !== "none"
      : false;
  };

  // Close menu on focusout (tabbing out) event (if target is outside of mobile menu and ignore if focus target is navToggleBtn button)
  navSearchCont.addEventListener("focusout", e => {
    if (
      checkIfMobileView() //&&
      // e.relatedTarget &&
      //e.relatedTarget !== navToggleBtn
    ) {
      if (
        !checkParent(
          /** @type {HTMLElement} **/ (e.currentTarget),
          /** @type {HTMLElement} **/ (e.relatedTarget)
        )
      ) {
        closeMenu();
      }
    }
  });

  const setHidden = (/** @type {boolean} */ hide) => {
    const mainCont = document.querySelector(".main-content");
    const footerGlobal = document.querySelector("footer");
    const footerSite = document.querySelector(".site-footer");
    const headerutility = document.querySelector(".utility-header");
    const siteBranding = document.querySelector(".branding");
    const regularHeader = document.querySelector("header");

    if (hide) {
      mainCont?.setAttribute("aria-hidden", "true");
      footerGlobal?.setAttribute("aria-hidden", "true");
      footerSite?.setAttribute("aria-hidden", "true");
      headerutility?.setAttribute("aria-hidden", "true");
      siteBranding?.setAttribute("aria-hidden", "true");
      regularHeader?.classList.add("nav-overlay");
    } else {
      //show
      mainCont?.removeAttribute("aria-hidden");
      footerGlobal?.removeAttribute("aria-hidden");
      footerSite?.removeAttribute("aria-hidden");
      headerutility?.removeAttribute("aria-hidden");
      siteBranding?.removeAttribute("aria-hidden");
      regularHeader?.classList.remove("nav-overlay");
    }
  };

  // Button click open menu function
  const openMenu = () => {
    navSearchCont.classList.add("visible");
    navSearchCont.classList.remove("not-visible");

    navToggleBtn.setAttribute("aria-expanded", "true");
    navMobileMenuToggleBtn.setAttribute("aria-expanded", "false");

    document.body.classList.add("overflow-hidden");
    navSearchCont.setAttribute("aria-hidden", "false");
    // make links focusable
    getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
    // Hide all the website areas (add aria-hidden)
    setHidden(true);

    navMobileMenuToggleBtn.focus();
  };

  // Button click close menu function
  const closeMenu = () => {
    navSearchCont.classList.remove("visible");
    navSearchCont.classList.add("not-visible");

    navToggleBtn.setAttribute("aria-expanded", "false");
    navMobileMenuToggleBtn.setAttribute("aria-expanded", "true");
    document.body.classList.remove("overflow-hidden");
    navSearchCont.setAttribute("aria-hidden", "true");
    // Deactivate escape key
    // removing focus
    getAllNavLinks().forEach(el => el.setAttribute("tabindex", "-1"));
    // remove aria hidden for the rest of the site
    setHidden(false);

    NavReset();

    navToggleBtn.focus();
  };

  // Default state for mobile
  const mobileNavDefault = () => {
    if (mainNav && utilityLinks)
      // mainNav.before(utilityLinks);
      document.body.classList.remove("overflow-hidden");
    if (!navSearchCont) return;
    navSearchCont.classList.add("not-visible");
    navSearchCont.classList.remove("visible");
    navSearchCont.setAttribute("aria-hidden", "true");
    // removing focus
    getAllNavLinks().forEach(el => el.setAttribute("tabindex", "-1"));
    // remove aria hidden for the rest of the site
    setHidden(false);
    // Deactivate escape key
    NavReset();
  };

  // Default state for desktop
  const desktopNavDefault = () => {
    if (utilityLinks && headerutilityLinksCont)
      // headerutilityLinksCont.append(utilityLinks);
      document.body.classList.remove("overflow-hidden");
    if (!navSearchCont) return;
    navSearchCont.classList.remove("visible");
    navSearchCont.classList.remove("not-visible");
    navSearchCont.setAttribute("aria-hidden", "false");
    getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
    // remove aria hidden for the rest of the site
    setHidden(false);
    NavReset();
  };

  // Button Click event
  navToggleBtn.addEventListener("click", openMenu);
  // Button Click event
  navMobileMenuToggleBtn.addEventListener("click", closeMenu);

  const mobileCheck = () => {
    const mobileCntls = document.querySelector(
      ".global-header .mobile-controls"
    );

    const mobileControlsDisplay = mobileCntls
      ? window.getComputedStyle(mobileCntls).display
      : "";

    if (mobileControlsDisplay == "block") {
      mobileNavDefault();
      // if desktop
    } else {
      desktopNavDefault();
    }
  };

  // on resize function (hide mobile nav)
  window.addEventListener("resize", mobileCheck);

  // ONLOAD
  // move duplicated logo to navigation drawer section
  document.querySelector(".navigation-search")?.prepend(mobileItemsCont);

  mobileCheck();
});
