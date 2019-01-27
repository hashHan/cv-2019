import React, { Component } from "react";

import { LoaderDialogWrapped } from "../../components/ui/material-ui/my-modal/my-loader";
import { MyProgress } from "../../components/ui/material-ui/my-progress/my-progress";

export class LoaderModal extends Component {
  state = {
    open: true
  };

  handleClose = prevPage => {
    this.setState(
      {
        open: false
      },
      () => {}
    );
  };

  title = "Loading...";

  render() {
    // array of object, containing id, primary, secondary

    return (
      <div>
        <LoaderDialogWrapped
          onClose={this.handleClose}
          open={this.state.open}
          //datas={error}
          title={this.title}
        >
          <MyProgress />
        </LoaderDialogWrapped>
      </div>
    );
  }
}
//
