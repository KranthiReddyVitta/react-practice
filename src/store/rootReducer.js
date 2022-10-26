import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import timerReducer from "./timerReducer";

export const rootReducer = combineReducers({
  counter: timerReducer,
  profile: profileReducer,
});
