import React from 'react';
import { LaunchPadsType } from '../../types/launchPadsType';

const LaunchPads: React.FC<Props> = ({ launchPads }) => {
   return (
      <div className="launchPads">
         {
            launchPads.map(pad => {
               return (
                  <a className="pad" key={pad.id} href={pad.wikipedia} target="_blank" rel="noopener noreferrer">
                     <div className="pad-item">
                        <p className="pad-item_title">{pad.location.name}</p>
                     </div>
                     <div className="pad-item">
                        <p className="pad-item_name">Регион:</p>
                        <p className="pad-item_value">{pad.location.region}</p>
                     </div>
                     <div className="pad-item">
                        <p className="pad-item_name">Запущенные ракеты:</p>
                        <p className="pad-item_value">{pad.vehicles_launched}</p>
                     </div>
                     <div className="pad-item">
                        <p className="pad-item_name">Всего запусков:</p>
                        <p className="pad-item_value">{pad.attempted_launches}</p>
                     </div>
                     <div className="pad-item">
                        <p className="pad-item_name">Успешных запусков:</p>
                        <p className="pad-item_value">{pad.successful_launches}</p>
                     </div>
                  </a>
               );
            })
         }
      </div>
   );
};

export default LaunchPads;

// Types
type Props = {
   launchPads: Array<LaunchPadsType>
}