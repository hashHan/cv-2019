import { combineReducers } from "redux";
//import { combineReducers } from "redux-immutable";

import auth from "./auth/reducer";
import common from "./common/reducer";
import profile from "./profile/reducer";
import style from "./style/reducer";
import cvs from "./cvs/reducer";
//import auth from "./auth/reducer";
//import user from "./user/reducer";

export const rootReducer = combineReducers({
  auth,
  common,
  cvs,
  profile,
  style
});
