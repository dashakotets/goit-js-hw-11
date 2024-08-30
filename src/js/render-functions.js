

{/* <div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div> */}


export const createGalleryCardTemplate = card => {
    return `<div class="gallery-card">
    <a href="${card.largeImageURL}"><img src="${card.previewURL}" alt="" title="" class="gallery-img"/></a>
    <div class="card-info">
    <ul class="info-text">
    <li>Likes</li>
    <li>Views</li>
    <li>Comments</li>
    <li>Downloads</li>
    </ul>
    <ul class="info">
    <li>${card.likes}</li>
    <li>${card.views}</li>
    <li>${card.comments}</li>
    <li>${card.downloads}</li>
    </ul>
</div></div>`;
};