// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init banner Swiper:
const swiperBanner = new Swiper('.swiper-banner', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});


// init robot swiper
const swiperRobot = new Swiper('.swiper-robot', {
  // Optional parameters
  loop: true,
  // Navigation arrows

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});






// init robot swiper
const swiperShare = new Swiper('.swiper-share', {
  spaceBetween: 24,
  // 滑鼠中鍵滾輪可滑動
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  slidesPerView: "auto",
});