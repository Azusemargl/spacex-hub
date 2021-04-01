import { SET_MISSION } from '../reducers/missionReducer';
import { missionsAPI } from '../../api';

const setMissions = (action) => ({
   type: SET_MISSION, payload: action
});

export const fetchMissions = () => async (dispatch) => {
   const { data } = await missionsAPI.missions();
   try {
      dispatch(setMissions(data));
   } catch(error) {
      alert(error)
   }
};