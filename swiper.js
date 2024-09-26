
var swiper = new Swiper('.artsSwiper', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -400],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    },
});
//     slidesPerView: 1, // Ensure one slide is visible at a time
//     spaceBetween: 30, // Adds some spacing between slides
//     autoplay: {
//         delay: 3000, // Time between slides in milliseconds (e.g., 3000ms = 3 seconds)
//         disableOnInteraction: false, // Keep autoplay active even when the user interacts
//     },
//     loop: true, // Enable looping so the slides continue to rotate infinitely
// });
