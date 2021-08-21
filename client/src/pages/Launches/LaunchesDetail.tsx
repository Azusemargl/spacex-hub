import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLaunchesDetail } from "../../redux/reducers/launchesReducer";
import LaunchesDetail from "../../components/Launches/LaunchesDetail/LaunchesDetail";
import { AppState } from "../../redux/store";

const LaunchesDetailContainer: React.FC = () => {
  // Dispatch an State
  const dispatch = useDispatch();
  const { launchesDetail, isLoading } = useSelector((state: AppState) => state.launchesReducer);

  const params: {id: string} = useParams();

  // Launches data call
  React.useEffect(() => {
    dispatch(fetchLaunchesDetail(params.id));
  }, [dispatch, params.id]);

  if (isLoading) return <span>Loading...</span>

  return <LaunchesDetail launch={launchesDetail} />;
};

export default LaunchesDetailContainer;