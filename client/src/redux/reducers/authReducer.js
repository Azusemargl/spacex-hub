export const SET_AUTH = 'SET_AUTH';
export const LOGOUT = 'LOGOUT';
export const SET_LOGOUT = 'SET_LOGOUT';

const initialState = {
   login: null,
   email: null,
   isAuth: false
};

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH:
         return {...state,...action.payload}

      case SET_LOGOUT:
         return {...state,...action.payload}
   
      default:
         return state;
   }
};
