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
    
}
