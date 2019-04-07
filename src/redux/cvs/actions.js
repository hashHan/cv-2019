import { fromJS } from "immutable";
import { push } from "connected-react-router";

//import { myconfig } from '../../config';
import api from "../../lib/api";
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
    // dispatch({
    //   type: actionTypes.CVS_START
    // });
  };
};

export const cvsFail = error => {
  loggerDev("cvsFail: ", error);
  return dispatch => {
    dispatch(commonFail(error));
    // dispatch({
    //   type: actionTypes.CVS_FAIL,
    //   error: error
    // });
  };
};

export const cvsSuccess = () => dispatch =>
  new Promise(function(resolve, reject) {
    loggerDev("cvsSuccess");
    dispatch(commonSuccess());
    // dispatch({
    //   type: actionTypes.CVS_SUCCESS
    // });
    resolve();
  });

export const getCvList = () => {
  loggerDev("getCvList");
  //const cvMeta = cvsTemp.map(each => each.cvMeta);
  //loggerDev("cvMeta: ", cvMeta);
  //const cvList = fromJS(cvMeta);
  return dispatch =>
    new Promise(function(resolve, reject) {
      dispatch(cvsStart());
      const reqInfo = {
        endpoint: "cv",
        url: "bapi/api/cv/list",
        method: "get"
      };
      api.get(reqInfo.url).then(response => {
        loggerDev("GET CV LIST", response.data.Cause);
        const cvList = fromJS(response.data.Cause);

        dispatch(cvsSuccess()); //return for promise;
        dispatch({
          type: actionTypes.GET_CV_LIST,
          data: cvList
        });
        resolve(cvList);
      });
      // .catch(error => {
      //     const formattedError = errorFormatter(error, section, reqInfo.endpoint, reqInfo.method)
      //     dispatch(cvsFail(formattedError));
      // });
    });
};

export const getCvOne = cvId => {
  loggerDev("getCvOne");
  // const cvOnejs = cvsTemp.filter(each => each.cvMeta.cvId === cvId)[0];
  // loggerDev("cvOne: ", cvOnejs);
  // const cvOne = fromJS(cvOnejs);
  return dispatch =>
    new Promise(function(resolve, reject) {
      dispatch(cvsStart());
      const reqInfo = {
        endpoint: "cv",
        url: `bapi/api/cv/${cvId}`,
        method: "get"
      };
      api.get(reqInfo.url).then(response => {
        loggerDev(response);
        loggerDev("GET CV ONE", response.data.Cv);
        // const {
        //    //cvs
        //    //id,
        //    //name, ...
        // } = response.data
        const cvOne = fromJS(response.data.Cv);

        dispatch(cvsSuccess()); //return for promise;
        dispatch({
          type: actionTypes.GET_CV_ONE,
          data: cvOne
        });
        resolve(cvOne);
      });
      // .catch(error => {
      //     const formattedError = errorFormatter(error, section, reqInfo.endpoint, reqInfo.method)
      //     dispatch(cvsFail(formattedError));
      // });
    });
};

export const getCvLatest = () => {
  loggerDev("getCvLatest");
  // const cvLatestjs = cvsTemp.filter(each => each.cvMeta.latest === true)[0];
  // loggerDev("cvLatest: ", cvLatestjs);
  //const cvLatest = fromJS(cvLatestjs);
  return (dispatch, getState) =>
    new Promise(function(resolve, reject) {
      const latestId = getState()
        .cvs.get("cvList")
        .filter(each => each.getIn(["cvMeta", "latest"]) === true)
        .getIn([0, "_id"]);
      loggerDev("latestId: ", latestId);
      dispatch(cvsStart());
      const reqInfo = {
        endpoint: "cv",
        url: `bapi/api/cv/${latestId}`,
        method: "get"
      };
      api.get(reqInfo.url).then(response => {
        loggerDev(response);
        loggerDev("GET CV LATEST", response.data.Cv);
        const cvLatest = fromJS(response.data.Cv);
        dispatch(cvsSuccess()); //return for promise;
        dispatch({
          type: actionTypes.GET_CV_LATEST,
          data: cvLatest
        });
        resolve(cvLatest);
      });
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
