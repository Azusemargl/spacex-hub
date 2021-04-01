import { SET_AUTH } from '../reducers/authReducer';
import { authAPI } from '../../api';

const setLogin = (action) => ({
   type: SET_AUTH, payload: action
});
const setLogout = (action) => ({
   type: SET_AUTH, payload: action
});

export const fetchRegister = (userData) => {
   fetchLogin(userData);
};

export const fetchLogin = (userData) => async (dispatch) => {
   const { data } = await authAPI.login(userData);
   try {
      dispatch(setLogin(data));
   } catch(error) {
      alert(error)
   }
};
export const fetchLogin = () => async (dispatch) => {
   const { data } = await authAPI.logout();
   try {
      dispatch(setLogout(null, null, null, null, false));
   } catch(error) {
      alert(error)
   }
};