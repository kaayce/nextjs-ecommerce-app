/* next.config.js ️ */

// CSS Loader
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
});

// SVG Loader
const withImages = require("next-images");
module.exports = withImages({
  /* config options placed here */
});
/* next.config.js  ️ */
