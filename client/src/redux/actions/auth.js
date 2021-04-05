import { SET_AUTH, SET_LOGOUT } from '../reducers/authReducer';
import { authAPI } from '../../api';
import { stopSubmit } from 'redux-form';

const setLogin = (login, email, isAuth) => ({
   type: SET_AUTH, payload: {login, email, isAuth}
});
const setLogout = (login, email, isAuth) => ({
   type: SET_LOGOUT, payload: {login, email, isAuth}
});

// Registration
export const fetchRegister = (login, email, password) => async (dispatch) => {
   const { data } = await authAPI.register(login, email, password);
   if (!data.error) {
      dispatch(fetchLogin(email, password));
   } else {
      dispatch(stopSubmit('register-form', {_error: data.error}));
   }
};

// Log in
export const fetchLogin = (email, password) => async (dispatch) => {
   const { data } = await authAPI.login(email, password);
   if (!data.error) {
      document.cookie = `jwt=${data.token}; secure`
      dispatch(setLogin(data.login, data.email, true));
   } else {
      dispatch(stopSubmit('login-form', {_error: data.error}));
   }
};

// Authentication after page rebuild
export const fetchMe = (token) => async (dispatch) => {
   const { data } = await authAPI.me(token);
   const user = data.user;
   if (!data.error) {
      dispatch(setLogin(user.login, user.email, true));
   } else {
      dispatch(stopSubmit('login-form', {_error: data.error}));
   }
};

// Log out
export const fetchLogout= () => (dispatch) => {
   dispatch(setLogout(null, null, false));
};