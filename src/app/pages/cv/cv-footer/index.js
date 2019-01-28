import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../../components/seo/page-with-meta";

import { withStyles } from "@material-ui/core/styles";
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

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

class CvFooterBase extends Component {
  render() {
    const { classes } = this.props;

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
          <Grid item xs={12} md={2}>
            <Paper className={classes.paper}>left</Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            container
            //direction='column'
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>1st</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>2nd</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>3rd</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>4th</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Paper className={classes.paper}>right</Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const CvFooter = withStyles(styles)(
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    CvFooterBase
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
