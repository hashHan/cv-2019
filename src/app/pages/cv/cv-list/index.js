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
      customKey: each._id,
      selected: each.cvMeta.latest,
      callbackParam: each._id,
      text: `version ${each.cvMeta.version}, ${each.cvMeta.description}`
    }));
    loggerDev("cvlist datas: ", datas);
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
