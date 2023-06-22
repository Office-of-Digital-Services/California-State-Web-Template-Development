//@ts-check
/* -----------------------------------------
   SEARCH - /source/js/cagov/search.js
----------------------------------------- */

window.addEventListener("load", () => {
  const setSearchContainerAriaHidden = () => {
    if (searchContainer) {
      if (featuredsearch) {
        searchContainer.removeAttribute("aria-hidden");

        document.querySelector("[name='q']")?.removeAttribute("tabindex");
        document
          .querySelector(".gsc-search-button")
          ?.removeAttribute("tabindex");
      } else {
        searchContainer.setAttribute("aria-hidden", "true");
      }
    }
  };

  const mobileControlVisible = () => {
    const mobileElement = document.querySelector(
      ".global-header .mobile-controls"
    );

    if (mobileElement) {
      return getComputedStyle(mobileElement)["display"] !== "none";
    } else {
      return false; // or whatever is supposed to be returned when there is no header
    }
  };

  const removeSearchResults = () => {
    document.body.classList.remove("active-search");
    if (searchText) searchText.value = "";

    searchContainer?.classList.remove("active");
    searchContainer?.setAttribute("aria-hidden", "true");

    document
      .querySelector(".search-results-container")
      ?.classList.remove("visible");

    document
      .querySelectorAll(".ask-group")
      .forEach(a => a.classList.remove("fade-out"));

    if (!featuredsearch) {
      // added aria expaned attr for accessibility
      document
        .querySelector("button.first-level-link")
        ?.setAttribute("aria-expanded", "false");

      setSearchAttr();
    }
    // fire a scroll event to help update headers if need be
    window.dispatchEvent(new CustomEvent("scroll"));

    //        document.dispatchEvent('cagov.searchresults.hide'); // ???

    if (mobileControlVisible()) setSearchContainerAriaHidden();
  };

  /** @type {HTMLInputElement | null} */
  const searchText = document.querySelector(".search-textfield"); // search textfield, unique
  const searchInput = document.querySelector(
    "#head-search #Search .search-textfield"
  ); // search textfield -- same as searchText ?

  const searchSubmit = document.querySelector(
    "#head-search #Search .gsc-search-button"
  ); // search button, unique

  const searchReset = document.querySelector(
    "#head-search #Search .close-search"
  ); // hide search form on subpages, unique

  const searchContainer = document.querySelector("#head-search"); // contains the search form
  const featuredsearch = searchContainer?.classList.contains("featured-search"); // only exists on the home page (featured search) layout, and /sample/navigation-full-width-utility.html
  const searchactive = searchContainer?.classList.contains("active"); // "active" is applied on subpages when search form is visible

  const searchlabel = document.querySelector("#SearchInput"); // label for textfield

  /** @type {HTMLElement | null} */
  const searchbox = document.querySelector(
    ".search-container:not(.featured-search)"
  ); // only on subpages, unique, same as #head-search

  // header, contains nav, search form, etc, unique
  const headerHeight = /** @type {HTMLElement} */ (
    document.querySelector(".global-header")
  )?.offsetHeight; // header height

  /** @type {HTMLElement | null} */
  const utility = document.querySelector(".utility-header"); // utility header, unique
  const utilityHeight = utility?.offsetHeight || 0;
  // utility header height

  /** @type {NodeListOf<HTMLElement>} */
  const alertBanner = document.querySelectorAll(".alert-banner"); // page can have multiple

  let alertbannerHeight = 0;
  // taking into account multiple alert banners
  alertBanner.forEach(oneBanner => {
    alertbannerHeight += oneBanner.offsetHeight;
  });

  //const fullnav = document.querySelector(".top-level-nav"); // navigation ul tag, unique

  // contains navigation and search form, unique
  // Full width navigation
  const navigationHeight = document
    .querySelector(".navigation-search")
    ?.classList.contains("full-width-nav")
    ? 82
    : 0;

  if (searchText && searchContainer) {
    // Unfreeze search width when blured.
    const unfreezeSearchWidth = () => {
      searchContainer.classList.remove("focus");
      document.querySelector(".search-container")?.classList.add("focus"); // search-container is unique
    };
    searchText.addEventListener("blur", unfreezeSearchWidth, false);
    searchText.addEventListener("focus", unfreezeSearchWidth, false);
    const chgHandler = function () {
      if (this.value) {
        document.body.classList.add("active-search");
      }
    };
    searchText.addEventListener("change", chgHandler, false);
    searchText.addEventListener("keyup", chgHandler, false);
    searchText.addEventListener("paste", chgHandler, false);
  }

  if (!featuredsearch) {
    // added aria expaned attr for accessibility
    document
      .querySelector("button.first-level-link")
      ?.setAttribute("aria-expanded", "false");
  }

  //  search box top position
  // TODO: Really close to searchTop() except for top size
  if (!mobileControlVisible()) {
    // calulation search box top position
    const searchtop =
      headerHeight - utilityHeight - alertbannerHeight - navigationHeight;
    if (!mobileControlVisible() && searchbox) {
      searchbox.style.top = `${Math.max(searchtop, 82)}px`;
    }
  }

  // have the close button remove search results and the applied classes
  //resultsContainer.find('.close').on('click', removeSearchResults);
  document
    .querySelector(".search-results-container .close")
    ?.addEventListener("click", removeSearchResults, false);

  //searchContainer.find('.close').on('click', removeSearchResults);
  document
    .querySelector("#head-search .close")
    ?.addEventListener("click", removeSearchResults, false);

  // Our special nav icon which we need to hook into for starting the search
  // $('#nav-item-search')

  // so instead we are binding to what I'm assuming will always be the search
  const searchButton = document.querySelector("#nav-item-search");
  if (searchButton && searchText) {
    searchButton.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        searchText.focus();
        //".search-container:not(.featured-search)"
        if (!featuredsearch && searchbox) {
          searchbox.classList.toggle("active");
        }

        // hide Search form if it's not active
        if (searchactive) {
          // added aria expanded attr for accessibility
          this.querySelector("button")?.setAttribute("aria-expanded", "true");
          removeSearchAttr();
        } else {
          // added aria expaned attr for accessibility
          this.querySelector("button")?.setAttribute("aria-expanded", "false");
          setSearchAttr();
        }

        if (featuredsearch) removeSearchAttr();

        // let the user know the input box is where they should search
        if (searchContainer) {
          searchContainer.classList.add("play-animation");
          searchContainer.addEventListener("animationend", () => {
            this.classList.remove("play-animation");
          });
        }
      },
      false
    );
  }

  // Close search when close icon is clicked
  searchReset?.addEventListener("click", removeSearchResults);

  const removeSearchAttr = () => {
    searchInput?.removeAttribute("tabindex");
    searchInput?.removeAttribute("aria-hidden");

    searchSubmit?.removeAttribute("tabindex");
    searchSubmit?.removeAttribute("aria-hidden");

    searchReset?.removeAttribute("tabindex");
    searchReset?.removeAttribute("aria-hidden");

    searchlabel?.removeAttribute("aria-hidden");

    searchContainer?.removeAttribute("aria-hidden");
  };

  const setSearchAttr = () => {
    searchInput?.setAttribute("tabindex", "-1");
    searchInput?.setAttribute("aria-hidden", "true");

    searchSubmit?.setAttribute("tabindex", "-1");
    searchSubmit?.setAttribute("aria-hidden", "true");

    searchReset?.setAttribute("tabindex", "-1");
    searchReset?.setAttribute("aria-hidden", "true");

    searchlabel?.setAttribute("aria-hidden", "true");

    searchContainer?.setAttribute("aria-hidden", "true");
  };

  // Make Search form tabable if it's featured
  if (searchContainer) {
    if (searchContainer.classList.contains("featured-search")) {
      removeSearchAttr();
    } else {
      setSearchAttr();
    }
  }

  const setSearchTop = () => {
    // calulation search box top position
    const searchtop =
      headerHeight - utilityHeight - alertbannerHeight - navigationHeight;
    if (!mobileControlVisible() && searchbox) {
      searchbox.style.top = `${Math.max(searchtop, 55)}px`;
    }
  };

  // on alert close event
  document.querySelectorAll(".alert-banner .close").forEach(oneClose => {
    oneClose.addEventListener("click", setSearchTop);
  });

  // Calculation search box top property on the scroll for the fixed nav
  window.addEventListener("scroll", () => {
    if (!mobileControlVisible()) {
      // setting timeout before calculating the search box top property otherwise it can take into account transitional values.
      setTimeout(setSearchTop, 400);

      // remove featured search on scroll in desktop
      const FeaturedSearch = document.querySelector("nav ~ #head-search");
      if (FeaturedSearch) {
        if (
          document.body.scrollTop >= 100 ||
          document.documentElement.scrollTop >= 100
        ) {
          FeaturedSearch.classList.add("hidden-up");
        } else {
          FeaturedSearch.classList.remove("hidden-up");
        }
      }
    }
  });

  //  search box top position if browser window is resized
  window.addEventListener("resize", () => {
    setSearchTop();
    setSearchContainerAriaHidden();
  });

  setSearchContainerAriaHidden();
});

// call out the function on the page load
