export const SET_LAUNCH_PADS = 'SET_LAUNCH_PADS';

const initialState = {
   launchPads: []
};

export const launchPadsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LAUNCH_PADS:
         return {...state, launchPads: action.payload}
   
      default:
         return state;
   }
};
