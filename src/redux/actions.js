//local action files only change reducer state.
//Do Ajax call here, then propagate response to local actions.
export {} from "./admin/actions";

export {
  // auth,
  // login,
  // logout,
  // authCheckState,
  setCurrentUser,
  logoutUser,
  loginUser,
  establishCurrentUser
} from "./auth/actions";

export { getCvAll } from "./cvs/actions";

export { getCurrentProfile, removeCurrentProfile } from "./profile/actions";

export { setTheme } from "./style/actions";

//call axios here !!
