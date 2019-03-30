import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";

import Page from "../../components/seo/page-with-meta";

import { getCvList, getCvLatest, getCvOne } from "../../../redux/actions";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";

import Paper from "@material-ui/core/Paper";

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
    margin: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    //boxShadow: "0px 0px 0px 0px",
    maxWidth: "1300px",
    margin: "auto"
  },
  cvList: {
    margin: 0,
    bottom: "auto",
    right: "auto",
    position: "fixed",
    top: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
    zIndex: 100,
    opacity: 0.5,
    "&:hover": {
      opacity: 1
    }
  },
  fab: {
    margin: 0,
    top: "auto",
    left: "auto",
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 100,
    opacity: 0.2,
    "&:hover": {
      opacity: 1
    }
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

  scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  componentDidMount() {
    //this.props.dispatch(getCvLatest()).then(() => {
    //this.setState({
    //renderFlag: true,
    //cvList: this.props.cvList,
    //cvSelected: this.props.cvSelected,
    //});
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
      <Page
        style={{ maxWidth: "1400px" }}
        id="cv"
        title="cv"
        description={`cv page of haeseong han`}
      >
        <Paper className={classes.paper}>
          <Paper className={classes.cvList}>
            {//this.state.renderFlag &&
            cvListToRender ? (
              <CvList
                //className={classes.cvList}
                cvListData={cvListToRender}
                cvListCallback={cvId => this.cvListCallback(cvId)}
              />
            ) : null}

            {/* {cvToRender
              ? `Version: ${cvToRender.cvMeta.owner}'s cv updated in ${
                  cvToRender.cvMeta.timestamp
                }`
              : "CV page"} */}
          </Paper>
          {//this.state.renderFlag &&
          cvToRender ? (
            <Aux>
              <CvHeader
                headerData={cvToRender.headerData}
                metaData={cvToRender.cvMeta}
              />
              <CvBody bodyData={cvToRender.bodyData} />
              <CvFooter
                footerData={cvToRender.footerData}
                metaData={cvToRender.cvMeta}
              />
            </Aux>
          ) : null}
          <Fab
            color="default"
            size="small"
            className={classes.fab}
            onClick={this.scrollToTop}
          >
            <UpIcon />
          </Fab>
        </Paper>
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
