var swiper = new Swiper(".depoimentos", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".paginator-depoimentos",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.9,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});
