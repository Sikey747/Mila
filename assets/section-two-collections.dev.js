"use strict";

var startSwiper = function startSwiper() {
  var config = {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".section_two_collections .swiper-pagination",
      clickable: "true"
    }
  };
  var sectionTwoCollections = new Swiper(".section_two_collections .swiper", config);
};

window.addEventListener("DOMContentLoaded", function () {
  return startSwiper();
});

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", function () {
    return startSwiper();
  });
  document.addEventListener("shopify:section:reorder", function () {
    return startSwiper();
  });
}