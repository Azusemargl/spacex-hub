import { combineReducers } from "redux";
import { launchesReducer } from './launchesReducer';
import { missionReducer } from './missionReducer';
import { launchPadsReducer } from './launchPadsReducer';
import { coresReducer } from './coresReducer';

export const rootReducer = combineReducers({
   launchesReducer,
   missionReducer,
   launchPadsReducer,
   coresReducer,
});
