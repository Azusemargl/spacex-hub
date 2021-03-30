import { SET_LAUNCH_PADS } from '../reducers/launchPadsReducer';
import { launchPadsAPI } from '../../api';

const setLaunchPads = (action) => ({
   type: SET_LAUNCH_PADS, payload: action
});

export const fetchLaunchPads = () => async (dispatch) => {
   const { data } = await launchPadsAPI.launchPads();
   try {
      dispatch(setLaunchPads(data));
   } catch(error) {
      alert(error)
   }
};