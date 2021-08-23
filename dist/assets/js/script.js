
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

lightGallery(document.getElementById('gallery-videos-demo'));

// GALLERY

const gallery = document.querySelectorAll(".gallery--hide");
const showMore = document.querySelector(".gallery__btn");

showMore.addEventListener('click', () => {
    galleryHide()
    showMoreBtn()
    
})

function galleryHide() {
    gallery.forEach((photo) => {
        photo.classList.toggle('gallery--hide');
    })
}
function showMoreBtn() {
    showMore.classList.toggle('btn--show');
    showMore.innerHTML = (showMore.className != 'gallery__btn btn--show') ? 'Показать все фото' : 'Скрыть все фото';
    
}
// GALLERY END
//# sourceMappingURL=script.js.map
