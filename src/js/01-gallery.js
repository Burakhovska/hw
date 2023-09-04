// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((img, index) =>
`<li class="gallery__item" data-img-id="${index}">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
  />
</a>
</li>`);

gallery.insertAdjacentHTML("beforeend", markup.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== "IMG") {
        return;
    } else {
        const imgId = evt.target.closest('li').dataset.imgId;
   
        const currentItem = galleryItems[Number(imgId)];
        console.log(currentItem);

        const instance = basicLightbox.create(`
            <div class="modal">
            <img width="600" src="${currentItem.original}" alt="${currentItem.description}">
            <h2>"${currentItem.description}</h2>
            </div>
        `)
        instance.show();
        document.addEventListener("keydown", onKey);
        function onKey(evt) {
            if(evt.code === 'Escape') {
                instance.close()
                
            }
        }
    }
}


console.dir(gallery);
console.dir(galleryItems);