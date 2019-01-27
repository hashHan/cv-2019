const merge = require("deepmerge");

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
const env = process.env.NODE_ENV || "production";
const defaultConfig = require("./default");
const envConfig = require(`./${env}`);
console.log(env);

const config = Object.assign({}, merge(defaultConfig, envConfig), { env });
console.log("config", config);
module.exports = {
  config
};
