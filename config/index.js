const merge = require("deepmerge");

console.log(
  "process.env.REACT_APP_CUSTOM_ENV: ",
  process.env.REACT_APP_CUSTOM_ENV
);
const env = process.env.REACT_APP_CUSTOM_ENV || "production";
const defaultConfig = require("./default");
const envConfig = require(`./${env}`);
console.log(env);

const config = Object.assign({}, merge(defaultConfig, envConfig), { env });
console.log("config", config);
module.exports = {
  config
};
