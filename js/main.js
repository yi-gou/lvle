window.addEventListener('load', () => {
    const swiper = new Swiper(".swiper", {
        speed: 600,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'progressbar',
            position: 'bottom',
        },
    });
    new WOW().init();
})

