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

import { loggerDev } from "../../../../lib/logger";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  description: {
    width: "100%"
    //verticalAlign: "top",
    //width: "min-content",
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
    borderTopStyle: "solid"
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

class ItemCatalogBase extends Component {
  state = {
    // open: {
    //   //
    // },
  };

  customcallback = () => {
    loggerDev("Hi callback");
  };

  render() {
    const { classes, details } = this.props;
    const columnNumbers = details.length;
    loggerDev("details columnNumbers :", columnNumbers);
    const gridNumber = parseInt(12 / columnNumbers);
    loggerDev("details gridNumber :", gridNumber);
    return (
      <Paper className={classes.paper}>
        <Grid
          item
          xs={12}
          container
          //spacing={8}
          className={classes.description}
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          {details.map(each => {
            return (
              <Grid key={each.title.text} item xs={12} sm={6} lg={gridNumber}>
                <MyList title={each.title} data={each.list} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

export const ItemCatalog = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  ItemCatalogBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
