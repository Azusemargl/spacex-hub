export const SET_ABOUT = 'SET_ABOUT';

const initialState = {
   about: [],
};

export const aboutReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ABOUT:
         return {...state, about: action.payload}
   
      default:
         return state;
   }
};
