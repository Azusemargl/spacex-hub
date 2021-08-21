import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/reducers/missionReducer';
import Twitter from '../../static/images/twitter.svg';
import Wikipedia from '../../static/images/wikipedia.svg';
import { AppState } from '../../redux/store';

const Missions: React.FC = () => {
   const dispatch = useDispatch();
   const missions = useSelector(({ missionReducer }: AppState) => missionReducer.missions);

   React.useEffect(() => {
      dispatch(fetchMissions());
   }, [dispatch])

   return (
      <div className="missions">
         {missions.map(mission => {
            return (
               <div className="mission" key={mission.mission_name}>
                  <h5 className="mission-title">{mission.mission_name}</h5>
                  <p className="mission-field"><i>Description:</i> {mission.description}</p>
                  <p className="mission-field"><i>Manufacturers:</i> {mission.manufacturers}</p>
                  <ul className="mission-field">
                     <p><i>Payload:</i></p>
                     {mission.payload_ids.map((item, index) => {
                        return (
                           <li className="mission-li">{index + 1}. {item}</li>
                        )
                     })}
                  </ul>
                  <ul className="mission-list">
                     <div className="mission-sochial">
                        <li className="mission-list_item">
                           <a className="mission-image" href={mission.twitter} target="_blank" rel="noopener noreferrer">
                              <img src={Twitter} alt="" />
                           </a>
                        </li>
                        <li className="mission-list_item">
                           <a className="mission-image" href={mission.wikipedia} target="_blank" rel="noopener noreferrer">
                              <img src={Wikipedia} alt="" />
                           </a>
                        </li>
                     </div>
                     <a href={mission.website} className="ref" target="_blank" rel="noopener noreferrer">
                        {mission.manufacturers}
                     </a>
                  </ul>
               </div>
            )
         })}
      </div>
   );
}

export default Missions;