import initialState from "./initial";
import * as actionTypes from "./action-types";
import { updateObject } from "../../lib/update-object"; // my util
//import {recordFromJS} from "../../../lib/immutable"; // fareed's util

const setCurrentProfile = (state, action) => {
  return updateObject(state, {
    currentProfile: action.profile
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PROFILE:
      return setCurrentProfile(state, action);
    default:
      return state;
  }
};
