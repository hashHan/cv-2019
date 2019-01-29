import { fromJS } from "immutable";
import { push } from "connected-react-router";

//import { myconfig } from '../../config';
//import api from '../../lib/api';
//import { errorFormatter } from '../lib/error-formatter';

import * as actionTypes from "./action-types";
import {
  commonStart,
  commonSuccess,
  commonFail,
  redirectAction
} from "../common/actions";

//import { defaultValue } from '../../containers/general-settings/default-values'
import { loggerDev } from "../../lib/logger";

import { cvsTemp } from "../tempData/cvsTemp";

const section = "cvs";

//loading and error
export const cvsStart = () => {
  loggerDev("cvsStart");
  return dispatch => {
    dispatch(commonStart());
    dispatch({
      type: actionTypes.CVS_START
    });
  };
};

export const cvsFail = error => {
  loggerDev("cvsFail: ", error);
  return dispatch => {
    dispatch(commonFail(error));
    dispatch({
      type: actionTypes.CVS_FAIL,
      error: error
    });
  };
};

export const cvsSuccess = () => dispatch =>
  new Promise(function(resolve, reject) {
    loggerDev("cvsSuccess");
    dispatch(commonSuccess());
    dispatch({
      type: actionTypes.CVS_SUCCESS
    });
    resolve();
  });

export const getCvAll = () => {
  loggerDev("getCvAll");
  const cvList = fromJS(cvsTemp);
  return dispatch =>
    new Promise(function(resolve, reject) {
      dispatch(cvsStart());
      //     const reqInfo = {
      //         endpoint: 'cvs',
      //         url: 'cvs',
      //         method: 'get',
      //     }
      //     api.get(reqInfo.url)
      //         .then(response => {
      //             loggerDev(response);
      //             const {
      //                //cvs
      //                //id,
      //                //name, ...
      //             } = response.data
      //             const cvList = fromJS({
      //                 // id,
      //                 // name: name ? name:"cvs_default",
      //             })

      dispatch(cvsSuccess()); //return for promise;
      dispatch({
        type: actionTypes.GET_CV_ALL,
        data: cvList
      });
      resolve(cvList);
      // })
      // .catch(error => {
      //     const formattedError = errorFormatter(error, section, reqInfo.endpoint, reqInfo.method)
      //     dispatch(cvsFail(formattedError));
      // });
    });
};

//POST cv
// export const postNewCv = (cv) => {
//   loggerDev('postNewCv: cv: ',cv.toJS());
//   return (dispatch, getState) =>  new Promise(function(resolve, reject){
//       dispatch(cvsStart());
//       const apispecCv = cv.toJS()
//       if(apispecCv.something === defaultValue.something || apispecCv.something === "default"){
//         apispecCv.something = "cvs_default"
//       }
//       loggerDev('apispecCv: ', apispecCv);

//       const reqInfo = {
//           endpoint: 'cvs',
//           url: 'cvs',
//           method: 'post',
//       }
//       loggerDev('reqInfo: ',reqInfo)
//       api.patch(reqInfo.url, apispecCv)
//           .then(response => {
//               loggerDev(response);
//               dispatch(cvsSuccess());
//               dispatch(getCvs());
//               dispatch(push('/'))//or '/cv'
//               resolve();
//           })
//           .catch(error => {
//               const formattedError = errorFormatter(error, section, reqInfo.endpoint, reqInfo.method)
//               dispatch(cvsFail(formattedError));
//           });
//   });
// };

//UPDATE cv
// export const patchCv = (cv) => {
//     loggerDev('patchCv: cv: ',cv.toJS());
//     return (dispatch, getState) =>  new Promise(function(resolve, reject){
//         dispatch(cvsStart());
//         const apispecCv = cv.toJS()
//         if(apispecCv.something === defaultValue.something || apispecCv.something === "default"){
//           apispecCv.something = "cvs_default"
//         }
//         loggerDev('apispecCv: ', apispecCv);

//         const reqInfo = {
//             endpoint: 'cvs',
//             url: 'cvs',
//             method: 'patch',
//         }
//         loggerDev('reqInfo: ',reqInfo)
//         api.patch(reqInfo.url, apispecCv)
//             .then(response => {
//                 loggerDev(response);
//                 dispatch(cvsSuccess());
//                 dispatch(getCvs());
//                 dispatch(push('/'))//or '/cv'
//                 resolve();
//             })
//             .catch(error => {
//                 const formattedError = errorFormatter(error, section, reqInfo.endpoint, reqInfo.method)
//                 dispatch(cvsFail(formattedError));
//             });
//     });
// };
