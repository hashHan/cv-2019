import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import { fromJS } from "immutable";

import { withStyles } from "@material-ui/core/styles";
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { MyList } from "../../../components/ui/material-ui/my-list/my-list";

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

  mylist = [
    {
      callback: this.customcallback,
      iconName: "close",
      primary: "text1",
      name: "one",
      sub: null
    },
    {
      callback: this.customcallback,
      iconName: "add_circle",
      primary: "text2",
      name: "two",
      sub: [
        {
          callback: this.customcallback,
          iconName: "add_circle",
          primary: "text3",
          name: "subone",
          sub: null
        },
        {
          callback: this.customcallback,
          iconName: "add_circle",
          primary: "text4",
          name: "subtwo",
          sub: null
        }
      ]
    }
  ];

  catalog = [
    {
      title: "first catalog title",
      //description: 'first catalog section',
      list: [
        {
          callback: this.customcallback,
          iconName: "close",
          primary: "text1",
          name: "one",
          sub: null
        },
        {
          callback: this.customcallback,
          iconName: "add_circle",
          primary: "text2",
          name: "two",
          sub: [
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text3",
              name: "subone",
              sub: null
            },
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text4",
              name: "subtwo",
              sub: null
            }
          ]
        }
      ]
    },
    {
      title: "second catalog title",
      //description: 'first catalog section',
      list: [
        {
          callback: this.customcallback,
          iconName: "close",
          primary: "text1",
          name: "one",
          sub: null
        },
        {
          callback: this.customcallback,
          iconName: "add_circle",
          primary: "text2",
          name: "two",
          sub: [
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text3",
              name: "subone",
              sub: null
            },
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text4",
              name: "subtwo",
              sub: null
            }
          ]
        }
      ]
    },
    {
      title: "third catalog title",
      //description: 'first catalog section',
      list: [
        {
          callback: this.customcallback,
          iconName: "close",
          primary: "text1",
          name: "one",
          sub: null
        },
        {
          callback: this.customcallback,
          iconName: "add_circle",
          primary: "text2",
          name: "two",
          sub: [
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text3",
              name: "subone",
              sub: null
            },
            {
              callback: this.customcallback,
              iconName: "add_circle",
              primary: "text4",
              name: "subtwo",
              sub: null
            }
          ]
        }
      ]
    }
  ];
  render() {
    const { classes } = this.props;
    const columnNumbers = this.catalog.length;
    console.log("catalog columnNumbers :", columnNumbers);
    const gridNumber = parseInt(12 / columnNumbers);
    console.log("catalog gridNumber :", gridNumber);
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
          {this.catalog.map(each => {
            return (
              <Grid item xs={gridNumber}>
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
