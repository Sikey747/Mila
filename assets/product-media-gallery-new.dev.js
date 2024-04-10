"use strict";

var startProductMediaGalleryNew = function startProductMediaGalleryNew() {
  var configSwiper = {
    slidesPerView: 1,
    pagination: {
      el: ".product-media-gallery-new .swiper-pagination",
      clickable: "true"
    }
  };
  var configGLightbox = {
    selector: "[data-glightbox]",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    closeOnOutsideClick: true,
    zoomable: true
  };
  var gallery = GLightbox(configGLightbox);
  var productMediaGalleryNew = new Swiper(".product-media-gallery-new .swiper", configSwiper);
};

window.addEventListener("DOMContentLoaded", function () {
  return startProductMediaGalleryNew();
});
document.addEventListener("activeProductMediaGallery", function () {
  startProductMediaGalleryNew();
});

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", function () {
    return startProductMediaGalleryNew();
  });
  document.addEventListener("shopify:section:reorder", function () {
    return startProductMediaGalleryNew();
  });
}