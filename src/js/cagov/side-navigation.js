//@ts-check

/* -----------------------------------------
 SIDE NAVIGATION - /source/js/cagov/side-navigation.js
----------------------------------------- */

window.addEventListener("load", () => {
  const siteHeader = document.querySelector("header");
  const sidenavigation = document.querySelector(".side-navigation");
  if (!sidenavigation || !siteHeader) return;
  const allSidenavLinks = sidenavigation.querySelectorAll(".side-navigation a");
  const mainContentSideNavCont = sidenavigation.closest("div");
  sidenavigation.setAttribute("id", "side-navigation");
  const topposition = localStorage.getItem("sidebar-scroll");
  const mobileCntls = document.querySelector(".global-header .mobile-controls");
  if (!mobileCntls) return;
  let mobileControlsDisplay = window.getComputedStyle(mobileCntls).display; // Side nav height vs viewport
  const siteHeaderHeight = siteHeader ? siteHeader.clientHeight : 0;
  const mobileView$3 = () =>
    getComputedStyle(mobileCntls)["display"] !== "none";
  let timeout = 0;
  const delay = 250; // delay between calls
  /** @type {HTMLElement} */
  let mobileSideNavDiv,
    /** @type {HTMLDivElement} */ mobileSideNavCont,
    /** @type {HTMLButtonElement} */ sidenavToggleBtn;

  const createMobileSideNavButton = () => {
    // get first side nav element
    /** @type {HTMLAnchorElement | null} */
    const sidenavTItle = document.querySelector(".side-navigation a, .sidenav");

    if (sidenavTItle) {
      // get text for the button for first side nav element
      let btnText = sidenavTItle.innerText;
      const btnTextSpan = sidenavTItle.querySelector("span")?.innerText || ""; // removing the sr-only span and it's content
      btnText = btnText.replace(btnTextSpan, "").trim();
      // create button container
      const sidenavMobile = document.createElement("aside");
      sidenavMobile.setAttribute("class", "sidenav-mobile-btn");
      const sidenavMobileCont = document.createElement("div");
      sidenavMobileCont.setAttribute("class", "container");
      sidenavMobile.append(sidenavMobileCont);
      // create button
      sidenavToggleBtn = document.createElement("button");
      sidenavToggleBtn.setAttribute("class", "sidenav-toggle");
      sidenavToggleBtn.setAttribute("aria-expanded", "false");
      sidenavToggleBtn.setAttribute("aria-controls", "side-navigation");
      sidenavToggleBtn.innerText = btnText;
      // create icon
      const arrowIcon = document.createElement("span");
      arrowIcon.setAttribute("aria-hidden", "true");
      arrowIcon.setAttribute("class", "ca-gov-icon-caret-down");
      sidenavToggleBtn.append(arrowIcon);
      // append button into the header
      sidenavMobileCont.append(sidenavToggleBtn);
      siteHeader.after(sidenavMobile);
      // add click event
      sidenavToggleBtn.addEventListener("click", toggleSideNav);
    }
  };

  const createmobileSideNavDiv = () => {
    mobileSideNavDiv = document.createElement("aside");
    mobileSideNavDiv.setAttribute("class", "mobile-sidenav");
    mobileSideNavCont = document.createElement("div");
    mobileSideNavCont.setAttribute("class", "container");
    mobileSideNavDiv.append(mobileSideNavCont);
    siteHeader.after(mobileSideNavDiv);
  };

  // MOBILE Side nav
  const moveSideNavToHeader = () => {
    if (mobileSideNavCont) {
      mobileSideNavCont.append(sidenavigation);
    }

    sidenavigation.setAttribute("aria-hidden", "true");
    allSidenavLinks?.forEach(el => {
      el.setAttribute("tabindex", "-1");
    });
  };

  // DESKTOP Side nav
  const moveSideNavToMainContent = () => {
    if (sidenavigation !== mainContentSideNavCont)
      mainContentSideNavCont?.append(sidenavigation);
    sidenavigation.removeAttribute("aria-hidden");
    allSidenavLinks?.forEach(el => {
      el.removeAttribute("tabindex");
    });
  };

  // Mobile Side Nav Button click function
  const toggleSideNav = () => {
    mobileSideNavDiv.classList.toggle("visible");
    // Open
    if (mobileSideNavDiv.classList.contains("visible")) {
      sidenavigation.removeAttribute("aria-hidden");
      sidenavToggleBtn.setAttribute("aria-expanded", "true");
      allSidenavLinks?.forEach(el => {
        el.removeAttribute("tabindex");
      });

      // Closed
    } else {
      sidenavToggleBtn.setAttribute("aria-expanded", "false");
      sidenavigation.setAttribute("aria-hidden", "true");
      allSidenavLinks?.forEach(el => {
        el.setAttribute("tabindex", "-1");
      });
    }
  };

  // Set active class on nav-heading links
  function addActiveClass() {
    /** @type {NodeListOf<HTMLAnchorElement>} */
    const active_link = document.querySelectorAll("a.nav-heading"),
      len = active_link.length,
      full_path = location.href.split("#")[0]; //Ignore hashes? // Loop through each link.
    for (let i = 0; i < len; i++)
      if (active_link[i].href.split("#")[0] == full_path)
        active_link[i].className += " active";
  }

  const sidenavOverflow = () => {
    if (!mobileView$3()) {
      const viewportheight = document.documentElement.clientHeight;
      const viewportMinusHeader = viewportheight - siteHeaderHeight - 100;

      if (
        viewportMinusHeader <=
        (document.querySelector(".side-navigation")?.clientHeight || 0)
      ) {
        sidenavigation.classList.add("overflow-auto"); // sidenavigation.setAttribute("style", "max-height:" + viewportMinusHeader + "px")
      } else {
        sidenavigation.classList.remove("overflow-auto");
        sidenavigation.removeAttribute("style");
      }

      if ([...sidenavigation.classList].includes("overflow-auto")) {
        sidenavigation.setAttribute(
          "style",
          `max-height:${viewportMinusHeader}px`
        );
      }
    } else {
      sidenavigation.classList.remove("overflow-auto");
      sidenavigation.removeAttribute("style");
    } // Remebemering scrolling position
    if (topposition !== null) {
      sidenavigation.scrollTop = parseInt(topposition, 10);
    }
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "sidebar-scroll",
        sidenavigation.scrollTop.toString()
      );
    });
  };

  // ONLOAD
  addActiveClass();
  createmobileSideNavDiv();
  createMobileSideNavButton();

  if (mobileControlsDisplay == "block") {
    moveSideNavToHeader();
  }
  // on resize
  window.addEventListener("resize", () => {
    mobileControlsDisplay = getComputedStyle(mobileCntls).display; // clear the timeout

    window.clearTimeout(timeout); // start timing for event "completion"
    timeout = window.setTimeout(sidenavOverflow, delay); // if mobile
    if (mobileControlsDisplay == "block") {
      moveSideNavToHeader(); // if desctop
    } else {
      moveSideNavToMainContent();
    }
  });
  sidenavOverflow();
});
