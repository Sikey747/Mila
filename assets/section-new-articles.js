const startSwiperNewArticles = () => {
  const swiperBulletText = Array.from(document.querySelectorAll("[data-swiper-bullet]"), (el) =>
    el.innerHTML.trim()
  );

  const config = {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"><span class="swiper-bullet-text">${swiperBulletText[index]}</span></span>`;
      },
    },
  };

  const sectionNewArticles = new Swiper(".section-new_articles .swiper", config);
};

window.addEventListener("DOMContentLoaded", () => startSwiperNewArticles());

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => startSwiperNewArticles());
  document.addEventListener("shopify:section:reorder", () => startSwiperNewArticles());
}
