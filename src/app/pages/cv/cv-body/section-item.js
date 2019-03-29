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

import { ItemDescription } from "./item-description";
import { ItemCatalog } from "./item-catalog";
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
  paperWithSub: {
    //padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    display: "inline-block"
  },
  paperWithUnderLine: {
    borderBottomStyle: "solid"
  },
  typography: {
    display: "inline-block"
  }
  // sub:{
  //   marginLeft: "10px",
  //   color: "red",
  // }
});

class SectionItemBase extends Component {
  render() {
    const { classes, eachitem } = this.props;

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
            <Grid item xs={9} md={9} container>
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  <Paper className={classes.paperWithSub}>
                    <MyTextLink
                      variant="body1"
                      gutterBottom
                      data={eachitem.mainTitle}
                      main="true"
                    />
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.mainTitle.sub}
                      //className={classes.sub}
                      sub="true"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paperWithSub}>
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.subTitle}
                      //main="true"
                    />

                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.subTitle.sub}
                      //className={classes.sub}
                      sub="true"
                    />
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3} container>
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  <Paper className={classes.paperWithSub}>
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.period}
                      //main="true"
                    />
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.period.sub}
                      //className={classes.sub}
                      sub="true"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paperWithSub}>
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.location}
                      //main="true"
                    />
                    <MyTextLink
                      variant="caption"
                      gutterBottom
                      data={eachitem.location.sub}
                      //className={classes.sub}
                      sub="true"
                    />
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ItemDescription details={eachitem.description} />
            <ItemCatalog details={eachitem.catalog} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const SectionItem = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  SectionItemBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
