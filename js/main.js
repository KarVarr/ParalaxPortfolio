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

//text animation
const text = document.querySelector('.text-animation');

text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

text.addEventListener('mouseover', e => {
  if (e.target.tagName !== 'SPAN') return;
  e.target.classList.add('activeText');
});

//swiper JS
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
