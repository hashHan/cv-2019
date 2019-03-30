import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../../components/seo/page-with-meta";

import { withStyles } from "@material-ui/core/styles";
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { SectionItem } from "./section-item";
import { MyTextLink } from "../../../components/ui/material-ui/my-typography/my-text-link";
import { grey } from "@material-ui/core/colors";
import { Aux } from "../../../components/auxiliary";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    //height: 240,
  },
  paper: {
    //padding: 0,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary
  },
  sectionTitle: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    //borderTopStyle: "solid",
    borderBottomStyle: "solid"
  },
  strikePaper: {
    //padding: theme.spacing.unit * 1,
    height: "1px",
    width: "100%",
    color: theme.palette.text.secondary,
    //borderTopStyle: "solid",
    borderBottomStyle: "solid"
  }
});

class BodySectionBase extends Component {
  render() {
    const { classes, sectionData } = this.props;

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
          <Grid item xs={12}>
            <Paper className={classes.sectionTitle}>
              <MyTextLink
                data={sectionData.sectionTitle}
                main="true"
                variant="h6"
              />
              <MyTextLink data={sectionData.sectionTitle.sub} sub="true" />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            //direction='column'
          >
            {sectionData.sectionDetails.map(each => (
              <Aux key={each.mainTitle.text}>
                <SectionItem key={each.mainTitle.text} eachitem={each} />
                <Paper className={classes.strikePaper} />
              </Aux>
            ))}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const BodySection = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  BodySectionBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
