//@ts-check

/* sticky header / hiding official header on scroll */
window.addEventListener("load", () => {
  const doc = document.documentElement;

  const headerAlert = document.querySelectorAll("header .alert");
  const header = document.querySelector(".utility-header");
  const mainheader = document.querySelector("header");
  if (!header || !mainheader) return;

  let prevScroll;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  let ticking = false;

  const updateHeader = () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      // Toggle Header
      if (direction === 2 && curScroll > 40) {
        // Add all the alert heights to the hidden height
        let alertHeight = 0;
        headerAlert.forEach(alert => {
          alertHeight += alert.clientHeight;
        });

        const hiddenheight = header.clientHeight + alertHeight;
        mainheader.style.top = `-${hiddenheight}px`;
        prevDirection = direction;
      } else if (direction === 1 && curScroll < 40) {
        mainheader.style.removeProperty("top");
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
