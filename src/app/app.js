// The basics
import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

// Action creators and helpers
import { establishCurrentUser } from "../redux/actions";
import { isServer } from "../redux/store";

import Header from "./components/header/header";
import Routes from "./routes/routes";

import withRootUI from "../styles/withRoot";

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      this.props.dispatch(establishCurrentUser());
    }
  }

  render() {
    return (
      <div id="app">
        <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        />
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default withRootUI(
  withRouter(
    connect(({ auth: { isAuthenticated }, common: { error, loading } }) => ({
      isAuthenticated,
      error,
      loading
    }))(App)
  )
);
