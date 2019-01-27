import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  return @connect(({ auth: { token } }) => ({
    token
  }))
  class RequireAuth extends Component {
    render() {
      switch (this.props.token) {
        case false:
          return <Redirect to="/" />;
        case null:
          //return <div>Loading...</div>;
          return <Redirect to="/" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  };
};
