import { SET_LAUNCHES, SET_LAUNCHES_DETAIL } from '../reducers/launchesReducer';
import { launchesAPI } from '../../api';

const setLaunches = (action) => ({
   type: SET_LAUNCHES, payload: action
});
const setLaunchesDetail = (action) => ({
   type: SET_LAUNCHES_DETAIL, payload: action
});

export const fetchLaunches = (limit) => async (dispatch) => {
   const { data } = await launchesAPI.allLaunches(limit);
   try {
      dispatch(setLaunches(data));
   } catch(error) {
      alert(error)
   }
};
export const fetchLaunchesDetail = (params) => async (dispatch) => {
   const { data } = await launchesAPI.launchesDetail(params);
   try {
      dispatch(setLaunchesDetail(data));
   } catch(error) {
      alert(error)
   }
}