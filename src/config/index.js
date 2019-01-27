import merge from "deepmerge";

import { defaultConfig } from "./default";

console.log(
  "process.env.REACT_APP_CUSTOM_ENV: ",
  process.env.REACT_APP_CUSTOM_ENV
);
const env = process.env.REACT_APP_CUSTOM_ENV || "production";
//const defaultConfig = require('./default');
const envConfig = require(`./${env}`);
console.log(env);

export const myconfig = Object.assign({}, merge(defaultConfig, envConfig), {
  env
});
