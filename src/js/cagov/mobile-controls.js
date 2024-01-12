//@ts-check

window.addEventListener("load", () => {
  // VARIABLES
  const navSearchCont = document.querySelector(".navigation-search");
  const navButton = document.querySelector(".toggle-menu");
  const mainNav = document.querySelector(".main-navigation");
  const utilityLinks = document.querySelector(".settings-links");

  if (!navButton) return;

  const getAllNavLinks = () =>
    document.querySelectorAll(
      '.navigation-search a.first-level-link, .navigation-search button.first-level-btn, .navigation-search input, .navigation-search button, .navigation-search [tabindex]:not([tabindex="-1"])'
    );

  const getAllUtilityLinks = () =>
    document.querySelectorAll(
      '.settings-links a, .settings-links button, .settings-links input, .settings-links select, .settings-links [tabindex]:not([tabindex="-1"])'
    );

  // all focusable elements other than navigation
  const getAllBodyLinks = () =>
    document.querySelectorAll(
      '.utility-header .social-media-links a, .utility-header .social-media-links input, .utility-header .social-media-links button, .utility-header .social-media-links [tabindex]:not([tabindex="-1"]), .branding a, .branding button, .branding input, .branding select, .main-content a[href], .main-content button, .main-content input, .main-content textarea, .main-content select, .main-content details, .main-content [tabindex]:not([tabindex="-1"]), .site-footer a[href], .site-footer button, .site-footer input, .site-footer textarea, .site-footer select, .site-footer details, .site-footer [tabindex]:not([tabindex="-1"]), footer a[href], footer button, footer input, footer textarea, footer select, footer details, footer [tabindex]:not([tabindex="-1"])'
    );

  // Add escape
  const addESC = function(e) {
    if (e.keyCode == 27) {
      mobileNavDefault();
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
      // @ts-ignore
      navButton.focus();
      navButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
      navSearchCont.setAttribute("tabindex", "-1");
      navSearchCont.setAttribute("role", "dialog");
      navSearchCont.setAttribute("aria-hidden", "false");
      // make links focusable
      getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
      getAllUtilityLinks().forEach(el => el.setAttribute("tabindex", "-1"));
      // make all the rest of the links not focusable
      getAllBodyLinks().forEach(el => el.setAttribute("tabindex", "-1"));
      // Hide all the website areas (add aria-hidden)
      setHidden(true);
      // Activate escape key
      document.addEventListener('keydown', addESC);
      // Close
    } else {
      navButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
      navSearchCont.setAttribute("aria-hidden", "true");
      navSearchCont.removeAttribute("tabindex");
      navSearchCont.removeAttribute("role");
      navSearchCont.removeAttribute("aria-modal");
      // Deactivate escape key
      document.removeEventListener('keydown', addESC);
      // removing focus
      getAllNavLinks().forEach(el => el.setAttribute("tabindex", "-1"));
      getAllUtilityLinks().forEach(el => el.removeAttribute("tabindex"));
      getAllBodyLinks().forEach(el => el.removeAttribute("tabindex"));
      // remove aria hidden for the rest of the site
      setHidden(false);
      moveNavToggleButtonToMobileControlsContainer();
    }
  };

  // Default state for mobile
  const mobileNavDefault = () => {
    moveNavToggleButtonToMobileControlsContainer();
    
    if (mainNav && utilityLinks) 
    // mainNav.before(utilityLinks);
    document.body.classList.remove("overflow-hidden");
    // @ts-ignore
    if (!navSearchCont) return;
    navSearchCont.classList.add("not-visible");
    navSearchCont.classList.remove("visible");
    navSearchCont.setAttribute("aria-hidden", "true");
    navSearchCont.removeAttribute("tabindex");
    navSearchCont.removeAttribute("role");
    navSearchCont.removeAttribute("aria-modal");
    // removing focus
    getAllNavLinks().forEach(el => el.setAttribute("tabindex", "-1"));
    getAllUtilityLinks().forEach(el => el.removeAttribute("tabindex"));
    getAllBodyLinks().forEach(el => el.removeAttribute("tabindex"));
    // remove aria hidden for the rest of the site
    setHidden(false);
    // @ts-ignore
    navButton.focus();
    navButton.removeAttribute("tabindex");
  };

  // Default state for desktop
  const desktopNavDefault = () => {
    moveNavToggleButtonToMobileControlsContainer();
    const headerutilityLinksCont = document.querySelector(
      ".utility-header .container .flex-row"
    );
    if (utilityLinks && headerutilityLinksCont)
     // headerutilityLinksCont.append(utilityLinks);
    document.body.classList.remove("overflow-hidden");
    if (!navSearchCont) return;
    navSearchCont.classList.remove("visible");
    navSearchCont.classList.remove("not-visible");
    navSearchCont.setAttribute("aria-hidden", "false");
    navSearchCont.removeAttribute("tabindex");
    navSearchCont.removeAttribute("role");
    navSearchCont.removeAttribute("aria-modal");
    getAllNavLinks().forEach(el => el.removeAttribute("tabindex"));
    getAllUtilityLinks().forEach(el => el.removeAttribute("tabindex"));
    getAllBodyLinks().forEach(el => el.removeAttribute("tabindex"));
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
