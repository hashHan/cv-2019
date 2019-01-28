import React from "react";
import { connect } from "react-redux";
import { create, SheetsRegistry } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from "@material-ui/core/styles";
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

// A theme with custom primary and secondary color.
// It's optional.
// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
// });
const theme = createMuiTheme(getMyTheme(1));

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset());

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName();

class WithRootUI extends React.Component {
  // state = {
  //   theme: createMuiTheme(getMyTheme(this.props.themeNumber))
  // };

  componentDidMount() {
    // const jssStyles = document.getElementById("jss-server-side");
    // if (jssStyles && jssStyles.parentNode) {
    //   jssStyles.parentNode.removeChild(jssStyles);
    // }
  }

  render() {
    const { children } = this.props;
    //const { theme } = this.state;
    // console.log('children: ', children)
    // console.log('theme number: ', this.props.themeNumber)
    // console.log('getMyTheme(this.props.themeNumber): ', getMyTheme(this.props.themeNumber))
    //console.log('createMuiTheme(getMyTheme(this.props.themeNumber)): ', createMuiTheme(getMyTheme(this.props.themeNumber)))
    //const theme = createMuiTheme(getMyTheme(this.props.themeNumber))
    return !isServer ? ( //client
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
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
          {children}
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export const WithRootUIThemed = connect(
  ({ style: { themeNumber }, common: { error, loading } }) => ({
    themeNumber,
    error,
    loading
  })
)(WithRootUI);
