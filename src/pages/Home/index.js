import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../redux/actions/launches';
import { fetchLaunchPads } from '../../redux/actions/launchPads';
import Main from '../../components/Home/Main';
import LaunchesContainer from '../../components/Launches/LaunchesContainer';
import LaunchPads from '../../components/LaunchPads/LaunchPads';

const Home = React.memo(() => {
      // Launches data limit
      const [launchesLimit, setLaunchesLimit] = React.useState(3);
   
      // Dispatch and State
      const dispatch = useDispatch();
   
      const launches = useSelector(({ launchesReducer }) => launchesReducer.launches);
      const launchPads = useSelector(({ launchPadsReducer }) => launchPadsReducer.launchPads);
   
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
               <LaunchesContainer launches={launches} />
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
