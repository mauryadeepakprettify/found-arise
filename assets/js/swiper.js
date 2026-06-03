const swiperA = new Swiper(".swiperA", {
  loop: true,
  speed: 400,
  spaceBetween: 16,
  slidesPerView: 1.2,

  navigation: {
    nextEl: ".swiperA-button-next",
    prevEl: ".swiperA-button-prev",
  },

  scrollbar: {
    el: ".swiperA-scrollbar",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.3,

      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,

      spaceBetween: 16,
    },
  },
});

// SecI Slider //
const seciTab = document.querySelectorAll(".secI .tabs li");
seciTab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    seciTab.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    seciaSlider.slideTo(index);
    secibSlider.slideTo(index);
  });
});

const seciaSlider = new Swiper(".secia-slider", {
  loop: true,
  speed: 500,
  delay: 4000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
});

const secibSlider = new Swiper(".secib-slider", {
  loop: true,
  speed: 400,
  spaceBetween: 16,
  slidesPerView: 1,
  direction: "vertical",
  allowTouchMove: false,
});

// secC Slider //
document.querySelectorAll(".secc-slider").forEach((slider) => {
  new Swiper(slider, {
    direction: "vertical",
    loop: false,
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".secc-button-next",
      prevEl: ".secc-button-prev",
    },
    allowTouchMove: false,
    pagination: {
      el: ".secc-pagination",
    },
  });
});

//secJ Slider //
const swiperJ = new Swiper(".secj-slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 3,
  direction: "vertical",
  pagination: {
    el: ".secj-pagination",
  },
  centerSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 800,
});
