const startProductMediaGalleryNew = () => {
  const configSwiper = {
    slidesPerView: 1,
    pagination: {
      el: ".product-media-gallery-new .swiper-pagination",
      clickable: "true",
    },
  };
  const configGLightbox = {
    selector: "[data-glightbox]",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    closeOnOutsideClick: true,
    zoomable: true,
  };

  const gallery = GLightbox(configGLightbox);
  const productMediaGalleryNew = new Swiper(".product-media-gallery-new .swiper", configSwiper);
};

window.addEventListener("DOMContentLoaded", () => startProductMediaGalleryNew());
document.addEventListener("activeProductMediaGallery", () => {
  startProductMediaGalleryNew();
});
if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => startProductMediaGalleryNew());
  document.addEventListener("shopify:section:reorder", () => startProductMediaGalleryNew());
}
