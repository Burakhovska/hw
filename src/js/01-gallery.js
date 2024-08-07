import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line




const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);

    gallery.insertAdjacentHTML('beforeend', markup.join(''));

    let lightbox = new SimpleLightbox('.gallery a', {
        captionPosition: "top",
        captionsData: 'alt',
        captionDelay: 250
    });

    // lightbox.on('show.simplelightbox', function (evt) {
            
    // `<div class="gallery">
    //     <a href="${original}">
    //     <img src="${original}" 
    //     alt="${description}" 
    //     title="${description}"/></a>
    // </div>`
    // console.dir(evt.target);
    // });
