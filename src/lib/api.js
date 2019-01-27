import axios, { CancelToken } from "axios";
import { myconfig } from "../config";
import { loggerDev } from "./logger";
const api = axios.create(myconfig.api);

// request interceptors
api.interceptors.request.use(
  conf => {
    //loggerDev(conf);
    loggerDev("localStroage cvToken: ", localStorage.getItem("cvToken"));
    const token = localStorage.getItem("cvToken");
    loggerDev("const token: ", token);

    // loggerDev('axios request log: ', conf);
    loggerDev("conf.url: ", conf.url);

    if (conf.url === "") {
      //
    }
    conf.headers["x-ktoken"] = token;

    loggerDev("axios request log: ", conf);
    //loggerDev('axios interceptor log: cvtoken= ',conf.headers['cvtoken'])
    return conf;
  },
  error => {
    loggerDev("axios request log error: ", error);
    // if (error.response) {
    //   loggerDev('error.response.data: ',error.response.data);
    //   loggerDev('error.response.status: ', error.response.status);
    //   loggerDev('error.response.headers: ',error.response.headers);
    // }
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  response => {
    loggerDev("axios response log: ", response);
    return response;
  },
  error => {
    loggerDev("axios response log error: ", error);
    if (error.response) {
      loggerDev("error.response.data: ", error.response.data);
      loggerDev("error.response.status: ", error.response.status);
      loggerDev("error.response.headers: ", error.response.headers);
    }
    return Promise.reject(error);
  }
);

// //cancelTokens
// let cancelTokens = [];

// //noinspection JSClosureCompilerSyntax
// export const createCancelToken = name => new CancelToken(cancel => cancelTokens.push({name, cancel}));

// /**
//  * cancel api request
//  * @param names
//  */
// export const cancelRequest = (...names) => {
//   cancelTokens = cancelTokens.filter(({name, cancel}) => {
//     if (names.indexOf(name) >= 0) {
//       try {
//         cancel(`API call for '${name}' has been canceled!`);
//       } catch (e) {
//         loggerDev(e);
//       }
//       return false;
//     }
//     return true;
//   })
// };

// export const isRequestCanceled = payload => payload && axios.isCancel(payload);

// /**
//  * get response data
//  * @param payload
//  * @param asRecord
//  * @return {*}
//  */
// export const getResponseData = payload => {
//   let data;
//   if (payload && payload.response && payload.response.data) {
//     data = payload.response.data;
//   } else if (payload && payload.data) {
//     data = payload.data;
//   } else {
//     data = payload;
//   }
//   return data;
// };

export default api;
