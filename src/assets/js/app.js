const swiper = new Swiper('.industries__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        850: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 640px
        1240: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
  });
const swiperReviews = new Swiper('.swiper__reviews', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 45,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
          spaceBetween: 45
        }
      }
  });