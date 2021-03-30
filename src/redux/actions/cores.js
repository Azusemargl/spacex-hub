import { SET_CORES } from '../reducers/coresReducer';
import { coresAPI } from '../../api';

const setCores = (action) => ({
   type: SET_CORES, payload: action
});

export const fetchCores = () => async (dispatch) => {
   const { data } = await coresAPI.cores();
   try {
      dispatch(setCores(data));
   } catch(error) {
      alert(error)
   }
}