"use strict";

var startSwiperNewArticles = function startSwiperNewArticles() {
  var swiperBulletText = Array.from(document.querySelectorAll("[data-swiper-bullet]"), function (el) {
    return el.innerHTML.trim();
  });
  var config = {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<span class=\"".concat(className, "\"><span class=\"swiper-bullet-text\">").concat(swiperBulletText[index], "</span></span>");
      }
    }
  };
  var sectionNewArticles = new Swiper(".section-new_articles .swiper", config);
};

window.addEventListener("DOMContentLoaded", function () {
  return startSwiperNewArticles();
});

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", function () {
    return startSwiperNewArticles();
  });
  document.addEventListener("shopify:section:reorder", function () {
    return startSwiperNewArticles();
  });
}