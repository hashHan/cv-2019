import { loggerDev } from "../../lib/logger";

export const errorFormatter = (error, section, endpoint, method) => {
  loggerDev("error: ", error);
  let formattedError = {
    section,
    endpoint,
    method,
    status: "",
    body: ""
  };
  if (error.response) {
    loggerDev("error.response.data: ", error.response.data);
    loggerDev("error.response.status: ", error.response.status);
    loggerDev("error.response.headers: ", error.response.headers);

    formattedError.status = error.response.status;
    formattedError.body = error.response.data;
  } else {
    loggerDev("Unexpected error: ", error);
    formattedError.body = error;
  }
  return formattedError;
};
