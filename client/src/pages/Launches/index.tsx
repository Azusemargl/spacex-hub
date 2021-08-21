import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../redux/reducers/launchesReducer';
import LaunchesContainer from '../../components/Launches/LaunchesContainer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { AppState } from '../../redux/store';

const Launches: React.FC<Props> = ({ launchesLimit }) => {
  // Dispatch and State
  const dispatch = useDispatch();
  const  {launches, isLoading } = useSelector(({ launchesReducer }: AppState) => launchesReducer);

  // Launches data call
  React.useEffect(() => {
    dispatch(fetchLaunches(launchesLimit));
  }, [dispatch, launchesLimit]);

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

// Types
type Props = {
  launchesLimit: number
}