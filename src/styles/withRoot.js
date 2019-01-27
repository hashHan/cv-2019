import React from "react";
import { create, SheetsRegistry } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from "@material-ui/core/styles";
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline";

import { getMyTheme } from "./themes";

// A nice helper to tell us if we're on the server
const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

//Sheets for server rendering
export const sheetsRegistry = new SheetsRegistry();
const sheetsManager = new Map();

const theme = createMuiTheme(getMyTheme);
// A theme with custom primary and secondary color.
// It's optional.
// const theme = createMuiTheme({
// //   palette: {
// //     primary: purple,
// //     secondary: green,
// //   },
// });

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset());

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName();

export function withRootUI(Component) {
  function WithRootUI(props) {
    // JssProvider allows customizing the JSS styling solution.
    return !isServer ? ( //client
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    ) : (
      //server
      <JssProvider
        jss={jss}
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }

  return WithRootUI;
}
