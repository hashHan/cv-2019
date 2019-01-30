import initialState from "./initial";
import * as actionTypes from "./action-types";

const cvsStart = (state, action) => {
  return state.set("error", null).set("loading", true);
};

const cvsFail = (state, action) => {
  return state.set("error", action.error).set("loading", false);
};

const cvsSuccess = (state, action) => {
  return state.set("error", null).set("loading", false);
};

const getCvAll = (state, action) => {
  return state.set("cvs", action.data);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CVS_START:
      return cvsStart(state, action);
    case actionTypes.CVS_FAIL:
      return cvsFail(state, action);
    case actionTypes.CVS_SUCCESS:
      return cvsSuccess(state, action);
    case actionTypes.GET_CV_ALL:
      return getCvAll(state, action);

    default:
      return state;
  }
};
