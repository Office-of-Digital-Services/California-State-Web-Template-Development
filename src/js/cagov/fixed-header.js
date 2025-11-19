//@ts-check

/* sticky header / hiding official header on scroll */
window.addEventListener("load", () => {
  /** @type {HTMLElement} */
  const headerAlert = document.querySelector("header .alert");
  /** @type {HTMLElement} */
  const header = document.querySelector(".utility-header");
  const mainheader = document.querySelector("header");
  if (!header || !mainheader) return;

  let prevScroll = 0;
  let prevDirection = 0;
  let ticking = false;

  const updateHeader = () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    const curScroll = window.scrollY;
    let direction = 0;

    if (curScroll > prevScroll) {
      direction = 2; // down
    } else if (curScroll < prevScroll) {
      direction = 1; // up
    }

    if (direction !== prevDirection) {
      if (direction === 2 && curScroll > 40) {
        const hiddenHeight =
          header.offsetHeight + (headerAlert?.offsetHeight || 0);
        mainheader.style.transform = `translateY(-${hiddenHeight}px)`;
        prevDirection = direction;
      } else if (direction === 1 && curScroll < 40) {
        mainheader.style.transform = "";
        prevDirection = direction;
      }
    }

    prevScroll = curScroll;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
});
