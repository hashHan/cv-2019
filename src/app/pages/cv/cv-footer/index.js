import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../../components/seo/page-with-meta";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";

import { MyTextLink } from "../../../components/ui/material-ui/my-typography/my-text-link";

import { loggerDev } from "../../../../lib/logger";

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
  },
  centeredPaper: {
    textAlign: "center",
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    margin: "auto"
  },
  leftColumn: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  rightColumn: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

class CvFooterBase extends Component {
  render() {
    const { classes, footerData, metaData } = this.props;
    let gridNumber = 12;
    if (footerData.iconLinks) {
      gridNumber = parseInt(12 / footerData.iconLinks.length);
      loggerDev("details gridNumber :", gridNumber);
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
          <Grid className={classes.leftColumn} item xs={12} md={2}>
            <Paper className={classes.paper} />
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
                      <Paper className={classes.centeredPaper}>
                        <Typography variant="subtitle1" gutterBottom>
                          <Link
                            target="_blank"
                            href={link.linkUrl}
                            className={classes.link}
                          >
                            {link.name}
                            {/* <Icon>{link.name}</Icon> */}
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })
              : null}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>space</Paper>
            </Grid> */}
            <Grid item xs={12}>
              <Paper className={classes.centeredPaper}>
                <Typography variant="caption" gutterBottom>
                  URL of this page: https://han-cv-2019.herokuapp.com/
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.centeredPaper}>
                <Typography variant="caption" gutterBottom>
                  CV Onwer: {metaData.owner} <br />
                  Version: {metaData.version} <br />
                </Typography>
                <Typography
                  style={{ color: "red" }}
                  variant="caption"
                  gutterBottom
                >
                  Latest:{" "}
                  {metaData.latest ? "YES" : "No, Choose other version on menu"}
                </Typography>
              </Paper>
            </Grid>
            {footerData.copyRight && footerData.copyRight.linkUrl ? (
              <Grid item xs={12}>
                <Paper className={classes.centeredPaper}>
                  <Typography variant="caption" gutterBottom>
                    Copyright ©{" "}
                    {footerData.copyRight ? (
                      <Link
                        target="_blank"
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
          <Grid className={classes.rightColumn} item xs={12} md={2}>
            <Paper className={classes.paper} />
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
