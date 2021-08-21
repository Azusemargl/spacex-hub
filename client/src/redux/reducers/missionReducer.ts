import { InferAction, BaseThunk } from './../store';
import { missionsAPI } from '../../api';
import { MissionType } from '../../types/missionsType';

const initialState = {
   missions: [] as Array<MissionType>,
   isLoading: true
};

export const missionReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_MISSION':
         return {...state, missions: action.payload, isLoading: false}
   
      default:
         return state;
   }
};

const actions = {
   setMissions: (action: Array<MissionType>) => ({ type: 'SET_MISSION', payload: action })
}

export const fetchMissions = (): Thunk => async dispatch => {
   const { data } = await missionsAPI.missions();
   try {
      dispatch(actions.setMissions(data));
   } catch(error) {
      alert(error)
   }
};

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>