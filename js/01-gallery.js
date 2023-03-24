import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', handleImgClick);

const makeGalleryImg = ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const markupGallery = galleryItems.map(evt => makeGalleryImg(evt)).join('');
galleryEl.insertAdjacentHTML('beforeend', markupGallery);

function handleImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(
  `<img class="gallery__image"
   src="${evt.target.dataset.source}" />`
 );
  instance.show();
  
  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

