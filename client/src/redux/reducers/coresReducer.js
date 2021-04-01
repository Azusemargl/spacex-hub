export const SET_CORES = 'SET_CORES';

const initialState = {
   cores: [],
};

export const coresReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CORES:
         return {...state, cores: action.payload}
   
      default:
         return state;
   }
};
