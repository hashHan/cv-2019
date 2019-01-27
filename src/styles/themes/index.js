import { myThemeOne } from "./theme-one";
import { myThemeTwo } from "./theme-two";

const myTheme = { myThemeOne, myThemeTwo };
export const getMyTheme = props => myTheme[props];
