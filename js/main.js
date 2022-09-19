'use strict';

//scroll
window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

//video
document.addEventListener('DOMContentLoaded', function () {
  const showSlider = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3, //how many sliders on the screen
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.showcase-navigation-next',
      prevEl: '.showcase-navigation-prev',
    },
  });
});
