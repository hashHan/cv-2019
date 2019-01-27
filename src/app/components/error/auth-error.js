import React, { Component } from "react";
import { connect } from "react-redux";

import { DialogShowWrapped } from "../../components/ui/material-ui/my-modal/my-modal";

import { errorMessage } from "./error-Message";

class ErrorModal extends Component {
  state = {
    open: true
  };

  handleClose = prevPage => {
    this.setState(
      {
        open: false
      },
      () => {
        //
      }
    );
  };

  title = "Error";

  render() {
    // array of object, containing id, primary, secondary
    let error = null;
    if (this.props.error) {
      error = [this.props.error].map(data => {
        let { section, endpoint, method, status, body } = data;
        let text = "";
        if (errorMessage[section][endpoint][method][status]) {
          text =
            errorMessage[section][endpoint][method][status]["client"]["en"];
        } else if (body) {
          text = JSON.stringify(body);
        } else {
          text = "Undefined error, please contact haeseong.han@gmail.com";
        }
        return {
          id: status,
          primary: section + " " + method + " " + status,
          secondary: text
        };
      });
    } else {
      //error = null;
    }
    console.log("error:", error);
    return (
      <DialogShowWrapped
        onClose={this.handleClose}
        open={this.state.open}
        datas={error}
        title={this.title}
      />
    );
  }
}

export default connect(({ common: { error } }) => ({
  error
}))(ErrorModal);
