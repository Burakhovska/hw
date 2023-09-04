// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((img, index) =>
`<li data-img-id="${index}" class="gallery__item">
<a class="gallery__link" 
    href="${img.original}">
    <img class="gallery__image" 
    src="${img.preview}" alt="${img.description}"
    data-description="${img.description}"/>
</a>
</li>`);

gallery.insertAdjacentHTML("beforeend", markup.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt) {

    evt.preventDefault()

    
    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: "data-description",
        
    });


        let currentItem;
            if (evt.target.nodeName !== "IMG") {
                return;
            } else {
                const imgId = evt.target.closest('li').dataset.imgId;
                currentItem = galleryItems[Number(imgId)];
            };

    lightbox.on('open.simplelightbox', function () {
        const lightboxContent = lightbox.content();
        const originalImg = galleryItems.map((img, index) => (`
        <img width="600" src="${currentItem.original}" alt="${currentItem.description}">
        <h2 class="description">${currentItem.description}"</h2>`));
        lightboxContent.innerHTML = originalImg;
        const description = lightboxContent.querySelector('.description');
        description.style.opacity = 1;
    })}


console.dir(gallery);
console.dir(galleryItems);