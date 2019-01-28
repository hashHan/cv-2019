import { combineReducers } from "redux";

import auth from "./auth/reducer";
import common from "./common/reducer";
import profile from "./profile/reducer";
import style from "./style/reducer";
//import admin from "./admin/reducer";
//import auth from "./auth/reducer";
//import user from "./user/reducer";

export const rootReducer = combineReducers({
  auth,
  common,
  profile,
  style
});
