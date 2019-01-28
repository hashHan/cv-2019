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

import { SectionItem } from "./section-item";
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

class BodySectionBase extends Component {
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
          <Grid item xs={12}>
            <Paper className={classes.paper}>Section Title</Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            //direction='column'
          >
            {[0, 1, 2].map(each => (
              <SectionItem key={each} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const BodySection = withStyles(styles)(
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    BodySectionBase
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
