import { InferAction, BaseThunk } from './../store';
import { coresAPI } from '../../api';
import { CoresType } from './../../types/coresType';

const initialState = {
   cores: [] as Array<CoresType>,
};

export const coresReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'SET_CORES':
         return {...state, cores: action.payload}
   
      default:
         return state;
   }
};

const actions = {
   setCores: (action: Array<CoresType>) => ({ type: 'SET_CORES', payload: action } as const)
}

export const fetchCores = (): Thunk => async dispatch => {
   const { data } = await coresAPI.cores();
   try {
      dispatch(actions.setCores(data));
   } catch(error) {
      alert(error)
   }
}

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = BaseThunk<Action>