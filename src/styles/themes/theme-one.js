import merge from "deepmerge";

import { themeDefault } from "./default";

const themeOne = {};

export const myThemeOne = Object.assign({}, merge(themeDefault, themeOne));
