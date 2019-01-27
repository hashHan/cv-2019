import * as actionTypes from "./action-types";
import Cookies from "js-cookie";

export const setCurrentUser = user => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      user
    });

    Cookies.set("mywebsite", user);

    dispatch({
      type: actionTypes.AUTHENTICATE,
      authenticated: true
    });

    resolve(user);
  });

export const establishCurrentUser = () => dispatch =>
  new Promise(resolve => {
    let userFromCookie = Cookies.getJSON("mywebsite");

    if (userFromCookie) {
      dispatch(setCurrentUser(userFromCookie));
      resolve(userFromCookie);
    } else {
      resolve({});
    }
  });

export const loginUser = (email, password) => dispatch =>
  new Promise((resolve, reject) => {
    const user = {
      email,
      password,
      name: "Awesome User"
    };

    dispatch(setCurrentUser(user));
    resolve(user);
  });

export const logoutUser = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: actionTypes.AUTHENTICATE,
      authenticated: false
    });

    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      user: {}
    });

    Cookies.remove("mywebsite");
    resolve({});
  });
