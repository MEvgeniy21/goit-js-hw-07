import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__item gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryRef.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
