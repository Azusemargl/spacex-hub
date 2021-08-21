import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../redux/reducers/launchesReducer';
import { fetchLaunchPads } from '../../redux/reducers/launchPadsReducer';
import Main from '../../components/Home/Main';
import LaunchesContainer from '../../components/Launches/LaunchesContainer';
import LaunchPads from '../../components/LaunchPads/LaunchPads';
import { AppState } from '../../redux/store';

const Home: React.FC = React.memo(() => {
      // Launches data limit
      const [launchesLimit, setLaunchesLimit] = React.useState(3);
   
      // Dispatch and State
      const dispatch = useDispatch();
   
      const launches = useSelector(({ launchesReducer }: AppState) => launchesReducer.launches);
      const isLoading = useSelector(({ launchesReducer }: AppState) => launchesReducer.isLoading);
      const launchPads = useSelector(({ launchPadsReducer }: AppState) => launchPadsReducer.launchPads);
   
      // Launches data call
      React.useEffect(() => {
         dispatch(fetchLaunches(launchesLimit));
         dispatch(fetchLaunchPads());
      }, []);

      return (
         <>
            <Main />
            <section>
               <h2 className="section_title">Запуски</h2>
               <div className="view">
                  <Link className="ref" to="/launches">Посмотреть все</Link>
               </div>
               <LaunchesContainer launches={launches} isLoading={isLoading} />
            </section>
            <section>
               <h2 className="section_title">Стартовые площадки</h2>
               <div className="launch_pads">
                  <LaunchPads launchPads={launchPads} />
               </div>
            </section>
         </>
      )
   }
)

export default Home;
