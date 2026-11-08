/*
 * Full page loads into and out of the home page.
 *
 * The home page (overrides/home.html) has no site header or footer, but
 * instant navigation swaps only parts of a page and keeps the header that
 * is already there. Arriving at the blog from home would leave the blog
 * without its header, and arriving home from the blog would show the
 * blog's header on the home page.
 *
 * Zensical skips instant navigation for links with a `target`, so this
 * gives `target="_self"` (a normal load in the same tab) to any same-site
 * link clicked on the home page, and to any link elsewhere that leads to
 * the home page. It listens in the capture phase so it runs before
 * Zensical's own click handler. Loaded on every page via extra_javascript.
 */
(function () {
  "use strict";

  // The home page's URL: the site root, from Zensical's config.
  function homeUrl() {
    try {
      var config = JSON.parse(document.getElementById("__config").textContent);
      return new URL(config.base || ".", location.href);
    } catch (e) {
      return new URL("/", location.href);
    }
  }

  function samePath(a, b) {
    var strip = function (p) { return p.replace(/index\.html$/, ""); };
    return strip(a.pathname) === strip(b.pathname);
  }

  document.addEventListener("click", function (ev) {
    var link = ev.target instanceof Element && ev.target.closest("a[href]");
    if (!link || link.target) return;

    var url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;

    var onHome = document.querySelector("header.st-topbar") !== null;
    if (onHome || samePath(url, homeUrl())) {
      link.target = "_self";
    }
  }, true);
})();
