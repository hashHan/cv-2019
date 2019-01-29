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
  header: {
    //height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary
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
    const columnNumbers = details.length;
    console.log("details columnNumbers :", columnNumbers);
    const gridNumber = parseInt(12 / columnNumbers);
    console.log("details gridNumber :", gridNumber);
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
          {details.map(each => {
            return (
              <Grid key={each.title.text} item xs={gridNumber}>
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
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    ItemDescriptionBase
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
