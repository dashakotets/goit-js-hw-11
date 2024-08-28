import iziToast from "izitoast";

const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedPhotos => {
    const urlParams = new URLSearchParams({
        key: '',
        q: searchedPhotos,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${urlParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            };

            return response.json();
        });
};

