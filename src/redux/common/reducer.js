import initialState from "./initial";
import * as actionTypes from "./action-types";
import { updateObject } from "../../lib/update-object"; // my util
//import {recordFromJS} from "../../../lib/immutable"; // fareed's util

const commonStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const commonSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const commonFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMMON_START:
      return commonStart(state, action);
    case actionTypes.COMMON_SUCCESS:
      return commonSuccess(state, action);
    case actionTypes.COMMON_FAIL:
      return commonFail(state, action);
    default:
      return state;
  }
};
