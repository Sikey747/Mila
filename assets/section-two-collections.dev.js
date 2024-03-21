"use strict";

var startSwiperTwoCollections = function startSwiperTwoCollections() {
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
  return startSwiperTwoCollections();
});

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", function () {
    return startSwiperTwoCollections();
  });
  document.addEventListener("shopify:section:reorder", function () {
    return startSwiperTwoCollections();
  });
}