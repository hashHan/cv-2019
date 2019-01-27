import initialState from "./initial";
import * as actionTypes from "./action-types";
import { updateObject } from "../../lib/update-object"; // my util
//import {recordFromJS} from "../../../lib/immutable"; // fareed's util

// const initialState = {
//     token: null,
//     userId: null,
//     error: null,
//     loading: false,
//     authRedirectPath: '/'
// };

const authenticate = (state, action) => {
  return updateObject(state, {
    isAuthenticated: action.authenticated
  });
};

const setCurrentUser = (state, action) => {
  return updateObject(state, {
    currentUser: action.user
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return authenticate(state, action);
    case actionTypes.SET_CURRENT_USER:
      return setCurrentUser(state, action);
    default:
      return state;
  }
};
