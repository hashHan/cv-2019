import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import { fromJS } from "immutable";

import { withStyles } from "@material-ui/core/styles";
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { MyList } from "../../../components/ui/material-ui/my-list/my-list";
import { MyTextLink } from "../../../components/ui/material-ui/my-typography/my-text-link";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  description: {
    //verticalAlign: "top"
  },
  paper: {
    //padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary
  },
  paperTopLine: {
    //padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    borderTopStyle: "dotted"
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nestedList: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ItemDescriptionBase extends Component {
  state = {
    // open: {
    //   //
    // },
  };

  customcallback = () => {
    console.log("Hi callback");
  };

  render() {
    const { classes, details } = this.props;
    //const columnNumbers = details.length;
    //console.log("details columnNumbers :", columnNumbers);
    //const gridNumber = parseInt(12 / columnNumbers);
    //console.log("details gridNumber :", gridNumber);
    return (
      <Paper className={classes.paper}>
        <Grid
          item
          xs={12}
          container
          //spacing={8}
          className={classes.description}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          {details.map(each => {
            return (
              <Grid key={each.title.text} item xs={12}>
                <MyList title={each.title} data={each.list} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

export const ItemDescription = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  ItemDescriptionBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
