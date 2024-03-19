const startSwiper = () => {
  const config = {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".section_two_collections .swiper-pagination",
      clickable: "true",
    },
  };

  const sectionTwoCollections = new Swiper(".section_two_collections .swiper", config);
};

window.addEventListener("DOMContentLoaded", () => startSwiper());

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => startSwiper());
  document.addEventListener("shopify:section:reorder", () => startSwiper());
}
