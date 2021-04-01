import React from 'react';

const LaunchesDetailGallery = React.memo(({ launch }) => {
   let isGallery = false;
   if (launch.links) {
      isGallery = launch.links.flickr_images.length > 1;
   }
   const [visabelPopUp, setVisabelPopUp] = React.useState(null);

   return (
      <>
         <div className="launch_detail-gallery">
            {isGallery
               ? launch.links.flickr_images.map(image => {
                     return (
                        <div className="launch_detail-gallery_item" key={image} onClick={() => setVisabelPopUp(image)}>
                           <img src={image} alt={launch.mission_name} />
                        </div>
                     );
                  })
               : <p className="launch_detail-gallery_empty">Изображения отсутствуют</p>
            }
         </div>
         {isGallery && visabelPopUp &&
            <div className="launch_detail-gallery_pop_up" onClick={() => setVisabelPopUp(null)}>
               <img src={visabelPopUp} />
            </div>
         }
      </>
   );
});

 export default LaunchesDetailGallery;