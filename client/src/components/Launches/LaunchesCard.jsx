import React from 'react';
import { Link } from 'react-router-dom';
import youtube from '../../static/images/youtube.svg';
import wikipedia from '../../static/images/wikipedia.svg';
import launchImage from '../../static/images/unknown_launch.jpg';

const LaunchesDetail = ({ launch }) => {
   return (
     <div className="launch">
       <Link className="launch-image" to={`/launches/${launch.flight_number}`}>
         {launch.links.mission_patch_small
          ? <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
          : <img src={launchImage} alt={launch.mission_name}/>
        }
       </Link>
       <p className="launch-title" href={launch.links.article_link}>{launch.mission_name}</p>
       <div className="launch-info">
         <div className="launch-info_item">
           <p className="launch-label">Год:</p>
           <p>{launch.launch_year}</p>
         </div>
         <div className="launch-info_item">
           <p className="launch-label">Ракета:</p>
           <p>{launch.rocket.rocket_name}</p>
         </div>
         <div className="launch-info_item">
           <p className="launch-label">Двигатель:</p>
           <p>{launch.rocket.rocket_type}</p>
         </div>
       </div>
       <div className="launch-links">
         <a className="launch-link" href={launch.links.video_link} target="_blank">
           <img src={youtube} alt={launch.mission_name}/>
         </a>
         <a className="launch-link" href={launch.links.wikipedia} target="_blank">
           <img src={wikipedia} alt={launch.mission_name}/>
         </a>
       </div>
       <a className="launch-article" href={launch.links.article_link} target="_blank">Читать статью...</a>
     </div>
   );
 };

 export default LaunchesDetail;