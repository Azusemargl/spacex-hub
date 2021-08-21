import { BaseThunk, InferAction } from './../store';
import { aboutAPI } from '../../api';
import { InfoType } from '../../types/infoType';

const initialState = {
   about: {} as InfoType,
};

export const aboutReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_ABOUT':
         return {...state, about: action.payload}
   
      default:
         return state;
   }
};

const actions = {
   setAbout: (action: InfoType) => ({ type: 'SET_ABOUT', payload: action } as const)
}

export const fetchAbout = (): Thunk => async dispatch => {
   const { data } = await aboutAPI.about();

   try {
      dispatch(actions.setAbout(data));
   } catch(e) {
      console.log(`Error: ${e}`);
   }
}

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>