export const SET_MISSION = 'SET_MISSION';

const initialState = {
   missions: [],
   isLoading: true
};

export const missionReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_MISSION:
         return {...state, missions: action.payload, isLoading: false}
   
      default:
         return state;
   }
};
