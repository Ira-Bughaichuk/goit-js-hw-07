import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");


const itemsEl = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" data-large="${original}" alt="${description}" />
            </a>`
}).join("");
galleryEl.insertAdjacentHTML("beforeend", itemsEl);


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,   
});




