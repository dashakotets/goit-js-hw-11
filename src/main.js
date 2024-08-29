import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchPhotos } from "./pixabay-api";
import { createGalleryCardTemplate } from "./render-functions";

const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

const onSearchSubmit = event => {
    event.preventDefault();
    const searchedValue = searchForm.elements.user_query.value;


    loaderEl.classList.toggle('is-hidden');
    fetchPhotos(searchedValue)
        .then(data => {
            loaderEl.classList.toggle('is-hidden');
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });

                galleryEl.innerHTML = '';
                searchForm.reset();

                return;
            };

            const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

            galleryEl.innerHTML = galleryCardsTemplate;

            var lightbox = new SimpleLightbox('.gallery a', {
                captions: true, 
                captionDelay: 250, 
                captionsData: 'alt', 
                captionPosition: 'bottom',
            });
            lightbox.refresh();
        })
        .catch(err => {
            console.log(err);
        });
    
};

searchForm.addEventListener('submit', onSearchSubmit);