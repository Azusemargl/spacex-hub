import { launchesAPI } from "../../api";
import { BaseThunk, InferAction } from "../store";
import { LaunchType } from './../../types/launchType';

export const SET_LAUNCHES = 'SET_LAUNCHES';
export const SET_LAUNCHES_DETAIL = 'SET_LAUNCHES_DETAIL';

const initialState = {
   launches: [] as Array<LaunchType>,
   launchesDetail: {} as LaunchType,
   isLoading: true
};

export const launchesReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_LAUNCHES':
         return { ...state, launches: action.payload, isLoading: false }
      case 'SET_LAUNCHES_DETAIL':
         return { ...state, launchesDetail: action.payload, isLoading: false }

      default:
         return state;
   }
};

const actions = {
   setLaunches: (action: Array<LaunchType>) => ({ type: 'SET_LAUNCHES', payload: action } as const),
   setLaunchesDetail: (action: LaunchType) => ({ type: 'SET_LAUNCHES_DETAIL', payload: action } as const)
}

export const fetchLaunches = (limit: number): Thunk => async (dispatch) => {
   const { data } = await launchesAPI.allLaunches(limit);
   try {
      dispatch(actions.setLaunches(data));
   } catch (error) {
      alert(error)
   }
};
export const fetchLaunchesDetail = (params: string): Thunk => async (dispatch) => {
   const { data } = await launchesAPI.launchesDetail(params);
   try {
      dispatch(actions.setLaunchesDetail(data));
   } catch (error) {
      alert(error)
   }
}

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>