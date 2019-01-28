import React from "react";
import App from "./app/app";
//import Aux from '../src/app/components/auxiliary';
import { withRootUI } from "./styles/withRoot";
import { WithRootUIThemed } from "./styles/with-root";

class DestyledApp extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    //const { children } = this.props;

    return <App />;
    //return <Aux>{children}</Aux>
  }
}

export const RestyledApp = withRootUI(DestyledApp); //withRoot for material UI
//export const RestyledApp = (<WithRootUIThemed><DestyledApp/></WithRootUIThemed>)
