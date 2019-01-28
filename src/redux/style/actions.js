import * as actionTypes from "./action-types";

export const setTheme = themeNumber => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: actionTypes.SET_THEME,
      themeNumber
    });

    resolve(themeNumber);
  });
