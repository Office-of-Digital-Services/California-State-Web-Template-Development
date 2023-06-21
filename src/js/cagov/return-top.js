//@ts-check
window.addEventListener("load", () => {
  document.querySelectorAll(".return-top").forEach(returnTop =>
    returnTop.addEventListener("click", () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
  );

  // Back to top link in the global footer
  document
    .querySelectorAll("a[href='#skip-to-content']")
    .forEach(backToTop =>
      backToTop.addEventListener("click", backToTopFunction)
    );

  /**
   * @param {Event} event
   */
  const backToTopFunction = event => {
    event.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
});

// If an user scrolls down the page for more than 400px activate back to top button
// othervise keep it invisible
let timer = 0;

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    const returnTopButton = document.querySelector(".return-top");
    if (!returnTopButton) return;

    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      returnTopButton.classList.remove("is-visible");
    } else if (
      document.body.scrollTop >= 400 ||
      document.documentElement.scrollTop >= 400
    ) {
      // upscroll code

      if (timer) {
        window.clearTimeout(timer);
      }
      returnTopButton.classList.add("is-visible");

      timer = window.setTimeout(() => {
        returnTopButton.classList.remove("is-visible");
      }, 2000); //Back to top removes itself after 2 sec of inactivity
    }
    // bottom of the page
    else {
      returnTopButton.classList.remove("is-visible");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

// Hittin' rock bottom
window.addEventListener("scroll", () => {
  const returnTopButton = document.querySelector(".return-top");
  if (!returnTopButton) return;
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    returnTopButton.classList.add("is-visible");
  }
});
