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

import { ItemDescription } from "./item-description";

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

class SectionItemBase extends Component {
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
          <Grid
            item
            xs={12}
            container
            //direction= 'column'
          >
            <Paper className={classes.paper}>Item Metas</Paper>
            <Grid item xs={9} md={9} container>
              <Paper className={classes.paper}>
                Item Titles
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Item Main Title</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Item Sub Title</Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3} container>
              <Paper className={classes.paper}>
                Item Location, Period
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Item Location</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Item Period</Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ItemDescription />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const SectionItem = withStyles(styles)(
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    SectionItemBase
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
