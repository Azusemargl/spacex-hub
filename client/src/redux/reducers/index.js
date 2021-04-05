import { combineReducers } from "redux";
import { launchesReducer } from './launchesReducer';
import { authReducer } from './authReducer';
import { missionReducer } from './missionReducer';
import { launchPadsReducer } from './launchPadsReducer';
import { coresReducer } from './coresReducer';
import { aboutReducer } from './aboutReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
   authReducer,
   launchesReducer,
   missionReducer,
   launchPadsReducer,
   coresReducer,
   aboutReducer,
   form: formReducer
});
