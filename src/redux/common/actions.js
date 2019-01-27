import { push } from "connected-react-router";

import * as actionTypes from "./action-types";

export const commonStart = () => {
  return {
    type: actionTypes.COMMON_START
  };
};

export const commonSuccess = () => {
  return {
    type: actionTypes.COMMON_SUCCESS
  };
};

export const commonFail = error => {
  return {
    type: actionTypes.COMMON_FAIL,
    error
  };
};

//redirect push
export const redirectAction = redirectRoute => {
  return dispatch => {
    dispatch(push(redirectRoute));
  };
};
