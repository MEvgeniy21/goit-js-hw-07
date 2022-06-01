import { galleryItems } from "./gallery-items.js";
// Change code below this line
let imgLightbox;
const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onClick);

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryRef.innerHTML = galleryItemsMarkup;

function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  createImgLightbox(event.target);
}

function createImgLightbox(target) {
  window.addEventListener("keydown", onEscKeyPress);
  imgLightbox = basicLightbox.create(`<img src="${target.dataset.source}">`, {
    closable: false,
  });

  imgLightbox.show();

  document
    .querySelector(".basicLightbox")
    .addEventListener("click", closeImgLightbox, { once: true });
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeImgLightbox();
  }
}

function closeImgLightbox() {
  imgLightbox.close();
  window.removeEventListener("keydown", onEscKeyPress);
}
