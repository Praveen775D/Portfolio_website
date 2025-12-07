// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const fabars = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

fabars.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// Home Slider
var homeSwiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


// Team Slider
var teamSwiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: {
        delay: 700,
        disableOnInteraction: false,
      },
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
