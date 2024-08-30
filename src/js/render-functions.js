

{/* <div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div> */}


export const createGalleryCardTemplate = card => {
    return `<div class="gallery-card">
    <a href="${card.largeImageURL}"><img src="${card.previewURL}" alt="" title="" class="gallery-img"/></a>
</div>`;
};