import Swiper from "swiper";
import "swiper/css";
import { Scrollbar, Autoplay } from "swiper/modules";

const startSwiper = () => {
  const IsAutoplay = document.querySelector(
    '.section-slide-products__container[data-autoplay="true"]'
  );
  const speed = +document
    .querySelector(".section-slide-products__container[data-speed]")
    .getAttribute("data-speed");
  let autoConfig;

  if (IsAutoplay) {
    autoConfig = {
      autoplay: {
        delay: speed,
      },
    };
  }

  const config = {
    modules: [Scrollbar, Autoplay],
    ...autoConfig,
    spaceBetween: 20,
    scrollbar: {
      el: ".section-slide-products .swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      400: {
        slidesPerView: 1.2,
      },
      700: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  const sectionSlideProducts = new Swiper(".section-slide-products .swiper", config);
};

window.addEventListener("DOMContentLoaded", () => startSwiper());

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => startSwiper());
  document.addEventListener("shopify:section:reorder", () => startSwiper());
}
