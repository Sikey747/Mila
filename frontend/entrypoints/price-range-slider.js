import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const sliderPrice = document.getElementById("sliderPrice");
const min = +sliderPrice.getAttribute("data-range-min");
const max = Math.floor(+sliderPrice.getAttribute("data-range-max"));

const inputMin = document.getElementById("Filter-Price-GTE");
const inputMax = document.getElementById("Filter-Price-LTE");

const priceRange = document.querySelector("price-range");

noUiSlider.create(sliderPrice, {
  start: [min, max],
  connect: true,
  tooltips: true,
  step: 1,
  range: {
    min: min,
    max: max,
  },
  // format: wNumb({
  //   decimals: 1,
  // }),
});

sliderPrice.noUiSlider.on("end", function (values, handle) {
  inputMin.setAttribute("value", +values[0]);
  inputMax.setAttribute("value", +values[1]);
});
