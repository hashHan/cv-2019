import initialState from "./initial";
import * as actionTypes from "./action-types";
import { updateObject } from "../../lib/update-object"; // my util
//import {recordFromJS} from "../../../lib/immutable"; // fareed's util

const setTheme = (state, action) => {
  return updateObject(state, {
    themeNumber: action.themeNumber
  });
};

const setProperty = (state, action) => {
  return updateObject(state, {
    [action.propertyName]: action.value
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return setTheme(state, action);
    case actionTypes.SET_PROPERTY:
      return setProperty(state, action);

    default:
      return state;
  }
};
