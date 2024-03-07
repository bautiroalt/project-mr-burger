AOS.init();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});