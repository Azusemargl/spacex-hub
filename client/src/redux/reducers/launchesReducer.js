export const SET_LAUNCHES = 'SET_LAUNCHES';
export const SET_LAUNCHES_DETAIL = 'SET_LAUNCHES_DETAIL';

const initialState = {
   launches: [],
   launchesDetail: [],
   isLoading: true
};

export const launchesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LAUNCHES:
         return {...state, launches: action.payload, isLoading: false}
      case SET_LAUNCHES_DETAIL:
         return {...state, launchesDetail: action.payload, isLoading: false}
   
      default:
         return state;
   }
};
