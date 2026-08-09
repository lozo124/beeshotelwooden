/*
 * SheremArt Bee-Hotel — interactive behaviour.
 *
 * The only behaviour the static markup does not encode is the sticky top bar
 * (#stickyTop): the source shows it once the in-flow logo bar scrolls out of
 * view, but only on desktop. On mobile (<= 768px) it stays hidden and the
 * bottom "Check Availability" bar (.smb-button-bottom, CSS-driven) is used
 * instead — so this script must not toggle the top bar on for narrow screens.
 */
(function () {
  "use strict";

  var sticky = document.getElementById("stickyTop");
  var logoBar = document.querySelector(".logo-bar");
  if (!sticky || !logoBar) return;

  var MOBILE_BREAKPOINT = 768; // matches the source's @media (max-width: 768px)

  function update() {
    var isDesktop = window.innerWidth > MOBILE_BREAKPOINT;
    var scrolledPastLogo = logoBar.getBoundingClientRect().bottom < 0;
    sticky.style.display = isDesktop && scrolledPastLogo ? "block" : "none";
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
})();
