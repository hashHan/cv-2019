import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import { getCvOne } from "../../../../redux/actions";
import { MyMenu } from "../../../components/ui/material-ui/my-menu/my-menu";

import { MyTextLink } from "../../../components/ui/material-ui/my-typography/my-text-link";

import { loggerDev } from "../../../../lib/logger";

const styles = theme => ({
  //   root: {
  //     flexGrow: 1
  //   },
  //   header: {
  //     //height: 240,
  //   },
  //   paper: {
  //     padding: theme.spacing.unit * 1,
  //     height: "100%",
  //     width: "100%",
  //     color: theme.palette.text.secondary,
  //     textAlign: "center"
  //   },
  //   link: {
  //     margin: theme.spacing.unit
  //   }
});

class CvListBase extends Component {
  getCvOneCallback = param => this.props.cvListCallback(param);

  render() {
    const { classes, cvListData } = this.props;
    const datas = cvListData.map(each => ({
      customKey: each.cvId,
      selected: each.latest,
      callbackParam: each.cvId,
      text: `version ${each.version}, ${each.description} on ${each.timestamp}`
    }));
    return (
      <MyMenu
        datas={datas}
        //selected={}
        receivedCallback={param => this.getCvOneCallback(param)}
      />
    );
  }
}

export const CvList = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  CvListBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
