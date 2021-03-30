import React from 'react';
import LaunchesCard from './LaunchesCard';
import Loader from '../common/Loader';

const LaunchesContainer = ({ launches, isLoading }) => {
  if (isLoading) {
    return <Loader />
  }

   return (
    <div className="launches">
        {launches.map(launch => {
            return (
              <LaunchesCard key={`${launch.flight_number}-${launch.mission_name}`} launch={launch} />
            );
          })
        }
    </div>
   );
 };

 export default LaunchesContainer;