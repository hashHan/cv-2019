//import {recordFromJS} from "../../shared/utility/immutable"; //copied fareed's lib

import { fromJS } from "immutable";

export default fromJS({
  isAuthenticated: false,
  token: false,
  currentUser: {}
});
