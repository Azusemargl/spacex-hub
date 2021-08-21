import React, { Fragment } from 'react';
import { LaunchType } from '../../../types/launchType'

const LaunchesDetailGallery: React.FC<Props> = React.memo(({ launch }) => {
   let isGallery = false;
   if (launch.links) {
      isGallery = !!launch.links.flickr_images.length;
   }
   const [image, setImage] = React.useState<string | null>(null);

   return (
      <Fragment>
         <div className="launch_detail-gallery">
            {isGallery
               ? launch.links.flickr_images.map(image => {
                     return (
                        <div className="launch_detail-gallery_item" key={image} onClick={() => setImage(image)}>
                           <img src={image} alt={launch.mission_name} />
                        </div>
                     );
                  })
               : <p className="launch_detail-gallery_empty">Изображения отсутствуют</p>
            }
         </div>
         {isGallery && image &&
            <div className="launch_detail-gallery_pop_up" onClick={() => setImage(null)}>
               <img src={image} alt="" onClick={e => e.stopPropagation()} />
            </div>
         }
      </Fragment>
   );
});

 export default LaunchesDetailGallery;

 type Props = {
   launch: LaunchType
 }