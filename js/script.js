/*
  Скрипты для интерактивных элементов страницы:
  - раскрытие мобильного меню по клику на бургер;
  - управление каруселью фотографий;
  - управление слайдером отзывов (видео).

  Все функции и обработчики обернуты внутри события DOMContentLoaded,
  чтобы убедиться, что разметка полностью загружена перед
  выполнением скриптов.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Переключение мобильного меню
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Фотокарусель
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselSlides = Array.from(carouselTrack.children);
  let carouselIndex = 0;
  const prevCarouselBtn = document.querySelector('.carousel-btn.prev');
  const nextCarouselBtn = document.querySelector('.carousel-btn.next');

  function updateCarousel() {
    // измеряем ширину видимой области карусели
    const slideWidth = carouselTrack.parentElement.offsetWidth;
    carouselTrack.style.transform = `translateX(-${carouselIndex * slideWidth}px)`;
  }

  // обработчики переключателей
  nextCarouselBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % carouselSlides.length;
    updateCarousel();
  });
  prevCarouselBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + carouselSlides.length) % carouselSlides.length;
    updateCarousel();
  });
  window.addEventListener('resize', updateCarousel);
  // первичная инициализация
  updateCarousel();

  // Слайдер отзывов
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const testimonialSlides = Array.from(testimonialsTrack.children);
  let testimonialsIndex = 0;
  const testimonialPrevBtn = document.querySelector('.testimonials-btn.prev');
  const testimonialNextBtn = document.querySelector('.testimonials-btn.next');

  function updateTestimonials() {
    // ширина одного слайда включая внешние отступы (padding)
    const slideWidth = testimonialSlides[0].getBoundingClientRect().width + 20;
    testimonialsTrack.style.transform = `translateX(-${testimonialsIndex * slideWidth}px)`;
  }

  testimonialNextBtn.addEventListener('click', () => {
    testimonialsIndex = (testimonialsIndex + 1) % testimonialSlides.length;
    updateTestimonials();
  });
  testimonialPrevBtn.addEventListener('click', () => {
    testimonialsIndex = (testimonialsIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
    updateTestimonials();
  });
  window.addEventListener('resize', updateTestimonials);
  updateTestimonials();
});