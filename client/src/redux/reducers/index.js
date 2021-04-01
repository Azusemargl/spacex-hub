import { combineReducers } from "redux";
import { launchesReducer } from './launchesReducer';
import { missionReducer } from './missionReducer';
import { launchPadsReducer } from './launchPadsReducer';
import { coresReducer } from './coresReducer';
import { aboutReducer } from './aboutReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
   launchesReducer,
   missionReducer,
   launchPadsReducer,
   coresReducer,
   aboutReducer,
   form: formReducer
});
