import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import Glide from '@glidejs/glide';
import { siblings } from '@glidejs/glide/src/utils/dom';
// import Choices from 'choices.js';


window.Alpine = Alpine;
Alpine.plugin(focus)
Alpine.start();

// const choice_element = document.querySelector('[data-choices-select]');
// const choices = new Choices(choice_element);


// Put active classes immediatly when glide changes
const CustomActiveClass = (Glide, Components, Events) => {
  const Component = {
    mount() {
      this.changeActiveSlide();
    },

    changeActiveSlide() {
      const slide = Components.Html.slides[Glide.index];
      const bullets = Components.Controls.items[1];
      const bullet = [...bullets.children].find(
        (bullet) => bullet.getAttribute("data-glide-dir") === `=${Glide.index}`
      );

      bullet.classList.remove("is-next", "is-prev");
      bullet.classList.add("is-active");
      slide.classList.remove("is-next", "is-prev");
      slide.classList.add("is-active");

      siblings(slide).forEach((sibling) => {
        sibling.classList.remove("is-active", "is-next", "is-prev");
      });
      siblings(bullet).forEach((sibling) => {
        sibling.classList.remove("is-active", "is-next", "is-prev");
      });

      if (slide.nextElementSibling) {
        slide.nextElementSibling.classList.add("is-next");
      }

      if (slide.previousElementSibling) {
        slide.previousElementSibling.classList.add("is-prev");
      }
      if (bullet.nextElementSibling) {
        bullet.nextElementSibling.classList.add("is-next");
      }

      if (bullet.previousElementSibling) {
        bullet.previousElementSibling.classList.add("is-prev");
      }
    },
  };

  Events.on("run", () => {
    Component.changeActiveSlide();
  });

  return Component;
};

// hero slider
const heroSlider = document.querySelectorAll('.hero-slider');
const heroSliderconf = {
  type: 'slider',
  startAt: 0,
  perView: 1
}
heroSlider.forEach(item => {
  new Glide(item, heroSliderconf).mount({ CustomActiveClass });
});

// Testimonial Glide Slider
const testimonialSlider = document.querySelectorAll('.testimonial-slider');
const testimonialSliderconf = {
  type: 'slider',
  startAt: 0,
  perView: 1,
  gap: 24
}
testimonialSlider.forEach(item => {
  new Glide(item, testimonialSliderconf).mount({ CustomActiveClass });
});

// Testimonial Glide Slider
const blogSlider = document.querySelectorAll('.blog-slider');
const blogSliderconf = {
  type: 'slider',
  startAt: 0,
    perView: 3,
    gap: 24,
    breakpoints: {
      1024: {
        perView: 2
      },
      640: {
        perView: 1
      }
    }
}
blogSlider.forEach(item => {
  new Glide(item, blogSliderconf).mount({ CustomActiveClass });
});

// window.addEventListener('load', function () {
//       let main_navigation = document.querySelector('#primary-menu');
//       document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
//             e.preventDefault();
//             main_navigation.classList.toggle('hidden');
//       });
// });