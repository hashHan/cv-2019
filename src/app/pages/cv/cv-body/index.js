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
          {[0, 1, 2].map(each => (
            <BodySection key={each} />
          ))}
        </Grid>
      </Paper>
    );
  }
}

export const CvBody = withStyles(styles)(
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    CvBodyBase
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
