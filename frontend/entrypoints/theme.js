// import "liquid-ajax-cart";

// import helpers, { hasBodyClass } from "../js/helpers.js";

// // Dynamic imports
// hasBodyClass("product-template") && import("../js/prodify.js");

// const ns = "slayed";

// window.slayedNamespace = ns;
// window[ns] = window[ns] || {};
// window[ns].helpers = helpers;

// for (const [key, value] of Object.entries(helpers)) {
//   window[ns].helpers[key] = value;
// }

// Hide the Shopify preview bar when in development
// if (process.env.NODE_ENV === 'development') {
//   //
//   window.addEventListener('DOMContentLoaded', () => {
//     var css = '#preview-bar-iframe { display: none !important; }',
//       head = document.head || document.getElementsByTagName('head')[0],
//       style = document.createElement('style')

//     head.appendChild(style)

//     style.appendChild(document.createTextNode(css))
//   })
// }
