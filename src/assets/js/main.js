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

// PHOTOGRAPHER 

const heart = document.querySelector(".photographer__img-heart > svg");
heart.addEventListener('click', () => {
    heart.classList.toggle('like')
    
})