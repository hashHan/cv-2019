import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { BodySection } from "./body-section";

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
  }
});

class CvBodyBase extends Component {
  render() {
    const { classes, bodyData } = this.props;

    return (
      <Paper className={classes.paper}>
        <Grid
          item
          xs={12}
          container
          //spacing={8}
          className={classes.header}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {bodyData.sectionDatas.map(each => (
            <BodySection key={each.sectionTitle.text} sectionData={each} />
          ))}
        </Grid>
      </Paper>
    );
  }
}

export const CvBody = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  CvBodyBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
