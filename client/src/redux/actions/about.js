import { SET_ABOUT } from '../reducers/aboutReducer';
import { aboutAPI } from '../../api';

const setAbout = (action) => ({
   type: SET_ABOUT, payload: action
});

export const fetchAbout = () => async (dispatch) => {
   const { data } = await aboutAPI.about();
   try {
      dispatch(setAbout(data));
   } catch(error) {
      alert(error)
   }
}