const startSwiperTwoCollections = () => {
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

window.addEventListener("DOMContentLoaded", () => startSwiperTwoCollections());

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => startSwiperTwoCollections());
  document.addEventListener("shopify:section:reorder", () => startSwiperTwoCollections());
}
