import Alpine from 'alpinejs';
import Glide from '@glidejs/glide';
 
window.Alpine = Alpine;
 
Alpine.start();

// Testimonial Glide Slider
if( document.getElementsByClassName('testimonial-slider').length > 0 ) {
  // new Glide('.testimonial-slider').mount();
  new Glide('.testimonial-slider', {
    type: 'slider',
    startAt: 0,
    perView: 1
  }).mount();
}
// window.addEventListener('load', function () {
//       let main_navigation = document.querySelector('#primary-menu');
//       document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
//             e.preventDefault();
//             main_navigation.classList.toggle('hidden');
//       });
// });