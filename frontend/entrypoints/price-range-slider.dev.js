"use strict";

var _nouislider = _interopRequireDefault(require("nouislider"));

require("nouislider/dist/nouislider.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sliderPrice = document.getElementById("sliderPrice");
var min = +sliderPrice.getAttribute("data-range-min");
var max = Math.floor(+sliderPrice.getAttribute("data-range-max"));
var inputMin = document.getElementById("Filter-Price-GTE");
var inputMax = document.getElementById("Filter-Price-LTE");
var priceRange = document.querySelector("price-range");

_nouislider["default"].create(sliderPrice, {
  start: [min, max],
  connect: true,
  tooltips: true,
  step: 1,
  range: {
    min: min,
    max: max
  } // format: wNumb({
  //   decimals: 1,
  // }),

});

sliderPrice.noUiSlider.on("end", function (values, handle) {
  inputMin.setAttribute("value", +values[0]);
  inputMax.setAttribute("value", +values[1]);
});