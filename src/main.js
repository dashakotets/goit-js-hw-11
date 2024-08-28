import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchPhotos } from "./pixabay-api";
import { createGalleryCardTemplate } from "./render-functions";

const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchSubmit = event => {
    event.preventDefault();
    const searchedValue = searchForm.elements.user_query.value;

    fetchPhotos(searchedValue)
        .then(data => {
            if (data.results.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });

                galleryEl.innerHTML = '';
                searchForm.reset();

                return;
            };

            const galleryCardsTemplate = data.results.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

            galleryEl.innerHTML = galleryCardsTemplate;
        })
        .catch(err => {
            console.log(err);
        });
    
};

searchForm.addEventListener('submit', onSearchSubmit);