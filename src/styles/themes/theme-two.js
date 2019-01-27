import merge from "deepmerge";

import { themeDefault } from "./default";

const themeTwo = {};

export const myThemeTwo = Object.assign({}, merge(themeDefault, themeTwo));
