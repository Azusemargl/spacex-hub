import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunchesDetail } from '../../../redux/actions/launches';
import LaunchesDetail from '../../../components/Launches/LaunchesDetail/LaunchesDetail';

const LaunchesDetailContainer = () => {
  // Dispatch an State
  const dispatch = useDispatch();
  const { launchesDetail, isLoading } = useSelector(state => state.launchesReducer);

  const { id } = useParams();

  // Launches data call
  React.useEffect(() => {
    dispatch(fetchLaunchesDetail(id));
  }, []);

  if (isLoading) {
    return 'loading';
  }

  return <LaunchesDetail launch={launchesDetail} />
 };

 export default LaunchesDetailContainer;