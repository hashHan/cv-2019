// The basics
import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

// Action creators and helpers
import { establishCurrentUser } from "../redux/actions";
import { isServer } from "../redux/store";

//import Header from "./components/header/header";
//import Routes from "./routes/routes";

import { MyLayout } from "./components/ui/material-ui/my-layout/my-layout";
import { ErrorModal } from "./components/error/auth-error";
import { LoaderModal } from "./components/error/loader";
import { Router } from "./routes/routes";

//import withRootUI from "../styles/withRoot";

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      //this.props.dispatch(establishCurrentUser());
    }
  }

  render() {
    const token = this.props.token ? token : null;
    return (
      <div id="app">
        {/* <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        /> */}
        {/* <MyLayout token={token}> */}
        <Router />
        {/* </MyLayout> */}
        {this.props.error ? <ErrorModal /> : null}
        {this.props.loading ? <LoaderModal /> : null}
      </div>
    );
  }
}

export default //withRootUI(
withRouter(
  connect(
    ({ auth: { isAuthenticated, token }, common: { error, loading } }) => ({
      isAuthenticated,
      token,
      error,
      loading
    })
  )(App)
);
//);
