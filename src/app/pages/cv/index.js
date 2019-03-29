import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../components/seo/page-with-meta";

import { getCvList, getCvLatest, getCvOne } from "../../../redux/actions";

import { withStyles } from "@material-ui/core/styles";

import { Aux } from "../../components/auxiliary";

import { CvList } from "./cv-list";
import { CvHeader } from "./cv-header";
import { CvBody } from "./cv-body";
import { CvFooter } from "./cv-footer";
import { loggerDev } from "../../../lib/logger";

const frontload = async props =>
  await props.dispatch(getCvList()).then(() => props.dispatch(getCvLatest()));

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    //height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary
    //boxShadow: "0px 0px 0px 0px",
  }
});

class CV extends Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center",
    renderFlag: false
    // cvList: this.props.cvList.getIn([0, "cvId"])
    //   ? this.props.cvList //.toJS()
    //   : null,
    // cvLatest: this.props.cvLatest.getIn(["cvMeta", "cvId"])
    //   ? this.props.cvLatest //.toJS()
    //   : null,
    // cvSelected: this.props.cvSelected.getIn(["cvMeta", "cvId"])
    //   ? this.props.cvSelected //.toJS()
    //   : null
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  cvListCallback = cvId => this.props.dispatch(getCvOne(cvId));

  componentDidMount() {
    //this.props.dispatch(getCvLatest()).then(() => {
    this.setState({
      //renderFlag: true,
      //cvList: this.props.cvList,
      //cvSelected: this.props.cvSelected,
    });
    //});
  }

  // componentWillUnmount() {
  //   //this.props.dispatch(removeCurrentProfile());
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     //this.props.dispatch(getCurrentProfile(+nextProps.match.params.id));
  //   }

  //   return true;
  // }

  render() {
    const { classes } = this.props;
    const cvLatestToRender = this.props.cvLatest.getIn(["cvMeta", "cvId"])
      ? this.props.cvLatest.toJS()
      : null;
    const cvToRender = this.props.cvSelected.getIn(["cvMeta", "cvId"])
      ? this.props.cvSelected.toJS()
      : cvLatestToRender;
    const cvListToRender = this.props.cvList.getIn([0, "cvId"])
      ? this.props.cvList.toJS()
      : null;

    loggerDev("cvToRender: ", cvToRender);
    loggerDev("cvListToRender: ", cvListToRender);
    return (
      <Page id="cv" title="cv" description={`cv page of haeseong han`}>
        {//this.state.renderFlag &&
        cvListToRender ? (
          <CvList
            cvListData={cvListToRender}
            cvListCallback={cvId => this.cvListCallback(cvId)}
          />
        ) : null}

        {cvToRender
          ? `${cvToRender.cvMeta.owner}'s cv updated in ${
              cvToRender.cvMeta.timestamp
            }`
          : "CV page"}

        {//this.state.renderFlag &&
        cvToRender ? (
          <Aux>
            <CvHeader headerData={cvToRender.headerData} />
            <CvBody bodyData={cvToRender.bodyData} />
            <CvFooter footerData={cvToRender.footerData} />
          </Aux>
        ) : null}
      </Page>
    );
  }
}

export default withStyles(styles)(
  connect(({ cvs }) => ({
    cvList: cvs.get("cvList"),
    cvSelected: cvs.get("cvSelected"),
    cvLatest: cvs.get("cvLatest")
    //error: cvs.get("error")
  }))(
    frontloadConnect(frontload, {
      onMount: true,
      onUpdate: false
    })(CV)
  )
);
