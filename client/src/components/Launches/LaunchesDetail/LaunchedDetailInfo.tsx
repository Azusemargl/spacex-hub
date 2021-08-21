import React from 'react';
import { LaunchType } from '../../../types/launchType';

const LaunchesDetailInfo: React.FC<Props> = React.memo(({ launch }) => {
   return (
      <div className="launch-info">
         <div className="launch-info_item">
            <p className="launch-label">Год:</p>
            <p>{launch.launch_year}</p>
         </div>
         <div className="launch-info_item">
            <p className="launch-label">Ракета:</p>
            <p>{launch.rocket?.rocket_name}</p>
         </div>
         <div className="launch-info_item">
            <p className="launch-label">Двигатель:</p>
            <p>{launch.rocket?.rocket_type}</p>
         </div>
         <div className="launch-info_item">
            <p className="launch-label">Время запуска:</p>
            <p>{launch.launch_date_local}</p>
         </div>
         <div className="launch-info_item">
            <p className="launch-label">Пробный запуск:</p>
            <p>{launch.is_tentative ? 'Да' : 'Нет'}</p>
         </div>
         <div className="launch-info_item">
            <p className="launch-label">Корабли:</p>
            <ul>
               {launch.ships?.length &&
                  launch.ships.length ? launch.ships.map((ship, index) => {
                     return (
                        <li key={`${index}-${ship}`}>{`${index + 1}. ${ship}`}</li>
                     );
                  }) : 'Отсутствуют'
               }
            </ul>
         </div>
      </div>
   );
});

export default LaunchesDetailInfo;

type Props = {
   launch: LaunchType
}