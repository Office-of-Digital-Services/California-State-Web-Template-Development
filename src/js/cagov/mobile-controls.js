//@ts-check

window.addEventListener("load", () => {
  /**
   *
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

  // VARIABLES
  /** @type {HTMLDivElement} */
  const navSearchCont = document.querySelector(".navigation-search");
  /** @type {HTMLDivElement} */
  const utilityLinks = document.querySelector(".settings-links");
  /** @type {HTMLDivElement} */
  const headerutilityLinksCont = document.querySelector(".utility-header .container .flex-row");
  /** @type {HTMLElement} */
  const mainNav = document.querySelector(".main-navigation");
  /** @type {HTMLButtonElement} */
  const navButton = document.querySelector(".toggle-menu");
    

  if (!navButton) return;

  const getAllNavLinks = () =>
    document.querySelectorAll(
      '.navigation-search a.first-level-link, .navigation-search button.first-level-btn, .navigation-search input, .navigation-search button, .navigation-search [tabindex]:not([tabindex="-1"])'
    );


 // Add escape
 const addESC = function(e) {
  if (e.key === "Escape") {
    mobileNavDefault();
    // Put focus on nav button once it's back in mobile section
    setTimeout(() => {
      // @ts-ignore
      navButton.focus();
    }, 400);
    
  } 
};

  // create container for drawer mobile nav items
  const mobileItemsCont = document.createElement("div");
  mobileItemsCont.setAttribute("class", "nav-drawer");

  // move mobile navigation toggle button back into mobile controls container
  const moveNavToggleButtonToMobileControlsContainer = () => {
    const navButtonCont = document.querySelector(
      ".mobile-controls .main-nav-icons"
    );
    setTimeout(() => {
      navButton.setAttribute("aria-expanded", "false");
      navButton.removeAttribute("tabindex");
      navButtonCont?.append(navButton);
    }, 300);
  };


  navSearchCont.addEventListener("focusout", e => {
    if (
      !checkParent(
        /** @type {HTMLElement} **/ (e.currentTarget),
        /** @type {HTMLElement} **/ (e.relatedTarget)
      )
    ) {
      openMenu();
      //window.location.reload();
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

  // Button click open and close menu function
  const openMenu = () => {
    mobileItemsCont.append(navButton);
    if (!navSearchCont) return;
    navSearchCont.classList.toggle("visible");
    navSearchCont.classList.toggle("not-visible");
    // Open
    if (navSearchCont.classList.contains("visible")) {
      navButton.focus();
      navButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
      navSearchCont.setAttribute("aria-hidden", "false");
      // make links focusable
      getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
      // Hide all the website areas (add aria-hidden)
      setHidden(true);
      // Activate escape key
      document.addEventListener('keydown', addESC);

      // Close
    } else {
      navButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
      navSearchCont.setAttribute("aria-hidden", "true");
      // Deactivate escape key
      document.removeEventListener('keydown', addESC);
      // removing focus
      getAllNavLinks().forEach(el => el.setAttribute("tabindex", "-1"));
      // remove aria hidden for the rest of the site
      setHidden(false);
      moveNavToggleButtonToMobileControlsContainer();
      // Put focus back on nav button that is moved back to mobile control section
      setTimeout(() => {
        navButton.focus();
      }, 300);
    }
  };

  // Default state for mobile
  const mobileNavDefault = () => {
    moveNavToggleButtonToMobileControlsContainer();
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
    document.removeEventListener('keydown', addESC);
  };

  // Default state for desktop
  const desktopNavDefault = () => {
    moveNavToggleButtonToMobileControlsContainer();
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
  };

  // Button Click event
  navButton.addEventListener("click", openMenu);

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
