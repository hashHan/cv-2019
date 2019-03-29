import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../../components/seo/page-with-meta";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
  paperTopLine: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    borderTopStyle: "solid"
  }
});

class CvFooterBase extends Component {
  render() {
    const { classes, footerData } = this.props;
    let gridNumber = 12;
    if (footerData.iconLinks) {
      gridNumber = parseInt(12 / footerData.iconLinks.length);
      console.log("details gridNumber :", gridNumber);
    }

    return (
      <Paper className={classes.paperTopLine}>
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
            {footerData.iconLinks &&
            footerData.iconLinks[0] &&
            footerData.iconLinks[0].linkUrl
              ? footerData.iconLinks.map(link => {
                  return (
                    <Grid key={link.linkUrl} item xs={gridNumber}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1" gutterBottom>
                          {link.iconName}:{" "}
                          <Link href={link.linkUrl} className={classes.link}>
                            {link.tooltip}
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })
              : null}
            <Grid item xs={12}>
              <Paper className={classes.paper}>space</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="caption" gutterBottom>
                  URL of this page: TO DO - get from config
                </Typography>
              </Paper>
            </Grid>
            {footerData.copyRight && footerData.copyRight.linkUrl ? (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="caption" gutterBottom>
                    Copyright ©{" "}
                    {footerData.copyRight ? (
                      <Link
                        href={footerData.copyRight.linkUrl}
                        className={classes.link}
                      >
                        {footerData.copyRight.text}
                      </Link>
                    ) : (
                      footerData.copyRight.text
                    )}
                  </Typography>
                </Paper>
              </Grid>
            ) : null}
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
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  CvFooterBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
);
//);
