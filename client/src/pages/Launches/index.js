import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../redux/actions/launches';
import LaunchesContainer from '../../components/Launches/LaunchesContainer';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const Launches = ({ launchesLimit }) => {
  // Dispatch and State
  const dispatch = useDispatch();
  const  {launches, isLoading } = useSelector(({ launchesReducer }) => launchesReducer);

  // Launches data call
  React.useEffect(() => {
    dispatch(fetchLaunches(launchesLimit));
  }, []);

  return (
    <>
      <Breadcrumbs items={[
        {id: 1, name: 'Главная', path: '/'},
        {id: 2, name: 'Запуски', path: '/launches'}
      ]} />
      <h2 className="section_title">Запуски</h2>
      <LaunchesContainer launches={launches} isLoading={isLoading} />
    </>
  );
};

export default Launches;
