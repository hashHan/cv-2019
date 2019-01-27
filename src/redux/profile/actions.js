import * as actionTypes from "./action-types";
import logo from "../../app/assets/logo.svg";

export const getCurrentProfile = id => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      let profile;

      if (id === 1) {
        profile = {
          id,
          name: "Pekka Rinne",
          image: logo
        };
      } else {
        profile = {
          id,
          name: "Viktor Arvidsson",
          image: logo
        };
      }

      dispatch({
        type: actionTypes.SET_CURRENT_PROFILE,
        profile
      });

      resolve(profile);
    }, 3000);
  });

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: actionTypes.SET_CURRENT_PROFILE,
      profile: {}
    });

    resolve({});
  });
