//@ts-check

/* -----------------------------------------
 SIDE NAVIGATION - /source/js/cagov/side-navigation.js
----------------------------------------- */

window.addEventListener("load", () => {
  const siteHeader = document.querySelector("header");
  const sidenavigation = /** @type {HTMLElement} */ (
    document.querySelector(".side-navigation")
  );
  if (!sidenavigation || !siteHeader) return;
  sidenavigation.id = "side-navigation";
  const topposition = localStorage.getItem("sidebar-scroll");
  const mobileCntls = document.querySelector(".global-header .mobile-controls");
  const siteHeaderHeight = siteHeader ? siteHeader.clientHeight : 0;
  const mobileView$3 = () =>
    getComputedStyle(mobileCntls)["display"] !== "none";

  /**
   * Set active class on nav-heading links
   */
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
  sidenavOverflow();
  addActiveClass();
});
