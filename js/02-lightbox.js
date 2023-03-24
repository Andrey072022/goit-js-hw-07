import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGalleryImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join("");

  galleryEl.insertAdjacentHTML("beforeend", makeGalleryImg);

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
      captionDelay: 250,
     captionPosition: 'bottom',
  });