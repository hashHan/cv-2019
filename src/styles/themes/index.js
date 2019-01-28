import { myThemeOne } from "./theme-one";
import { myThemeTwo } from "./theme-two";

const myTheme = {
  1: myThemeOne,
  2: myThemeTwo
};
export const getMyTheme = props => myTheme[props];

//https://github.com/styled-components/awesome-styled-components

//grid
//media
//animation
//components
