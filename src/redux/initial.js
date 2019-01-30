import { fromJS } from "immutable";

import admin from "./admin/initial";
import auth from "./auth/initial";
import common from "./common/initial";
import cvs from "./cvs/initial";
import profile from "./profile/initial";
import style from "./style/initial";

export default fromJS({
  admin,
  auth,
  common,
  cvs,
  profile,
  style
});
