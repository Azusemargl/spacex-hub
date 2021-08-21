import { stopSubmit } from 'redux-form';
import { authAPI } from '../../api';
import { BaseThunk, InferAction } from "../store";

const initialState = {
   login: '' as null | string,
   email: '' as null | string,
   isAuth: false
};

export const authReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_AUTH':
         return {...state,...action.payload}

      case 'SET_LOGOUT':
         return {...state,...action.payload}
   
      default:
         return state;
   }
};

const actions = {
   setLogin: (login: string | null, email: string | null, isAuth: boolean) => ({
      type: 'SET_AUTH', payload: {login, email, isAuth}
   } as const),
   setLogout: (login: string | null, email: string | null, isAuth: boolean) => ({
      type: 'SET_LOGOUT', payload: {login, email, isAuth}
   } as const)
}

// Registration
export const fetchRegister = (login: string, email: string, password: string): Thunk => async (dispatch: any) => {
   const { data } = await authAPI.register(login, email, password);
   if (!data.error) {
      dispatch(fetchLogin(email, password));
   } else {
      dispatch(stopSubmit('register-form', {_error: data.error}));
   }
};

// Log in
export const fetchLogin = (email: string, password: string): Thunk => async (dispatch: any) => {
   const { data } = await authAPI.login(email, password);
   if (!data.error) {
      document.cookie = `jwt=${data.token}; secure`
      dispatch(actions.setLogin(data.login, data.email, true));
   } else {
      dispatch(stopSubmit('login-form', {_error: data.error}));
   }
};

// Authentication after page rebuild
export const fetchMe = (token: string): Thunk => async (dispatch: any) => {
   const { data } = await authAPI.me(token);
   const user = data.user;
   if (!data.error) {
      dispatch(actions.setLogin(user.login, user.email, true));
   } else {
      dispatch(stopSubmit("login-form", {_error: data.error }));
   }
};

// Log out
export const fetchLogout = (): Thunk => async dispatch => {
   dispatch(actions.setLogout(null, null, false));
};

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>