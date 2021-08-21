import React from 'react';
import LaunchesCard from './LaunchesCard';
import Loader from '../common/Loader';
import { LaunchType } from '../../types/launchType';

const LaunchesContainer: React.FC<Props> = ({ launches, isLoading }) => {
  if (isLoading) return <Loader />

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

 // Types
 type Props = {
   launches: Array<LaunchType>
   isLoading: boolean
 }