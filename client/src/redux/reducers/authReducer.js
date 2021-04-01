export const SET_AUTH = 'SET_AUTH';
export const LOGOUT = 'LOGOUT';

const initialState = {
   login: null,
   email: null,
   password: null,
   password_2: null,
   isAuth: false
};

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH:
         return {...state,...action.payload, isAuth: true}

      case LOGOUT:
         return {...state,...action.payload}
   
      default:
         return state;
   }
};
