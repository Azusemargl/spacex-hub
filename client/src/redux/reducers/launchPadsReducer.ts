import { launchPadsAPI } from "../../api";
import { BaseThunk, InferAction } from "../store";
import { LaunchPadsType } from "../../types/launchPadsType";

export const SET_LAUNCH_PADS = 'SET_LAUNCH_PADS';

const initialState = {
   launchPads: [] as Array<LaunchPadsType>
};

export const launchPadsReducer = (state = initialState, action: Action) : InitialState=> {
   switch (action.type) {
      case 'SET_LAUNCH_PADS':
         return {...state, launchPads: action.payload}
   
      default:
         return state;
   }
};

const actions = {
   setLaunchPads: (action: Array<LaunchPadsType>) => ({ type: 'SET_LAUNCH_PADS', payload: action } as const)
}

export const fetchLaunchPads = (): Thunk => async dispatch => {
   const { data } = await launchPadsAPI.launchPads();

   try {
      dispatch(actions.setLaunchPads(data));
   } catch(error) {
      alert(error)
   }
};

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>