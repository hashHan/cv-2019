export const loggerDev = (...args) =>
  process.env.REACT_APP_CUSTOM_ENV === "production"
    ? null
    : console.log(...args);

//process.env.NODE_ENV
//process.env.REACT_APP_CUSTOM_ENV==='production'
