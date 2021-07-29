
// SWIPER
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  // LIGHTGALLERY

  lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
});

lightGallery(document.getElementById('video-gallery'));



//# sourceMappingURL=script.js.map
