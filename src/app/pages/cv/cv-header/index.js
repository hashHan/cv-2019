import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";

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
    color: theme.palette.text.secondary,
    textAlign: "center"
  },
  paperBottomLine: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary,
    borderBottomStyle: "solid"
  },
  link: {
    margin: theme.spacing.unit
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

class CvHeaderBase extends Component {
  render() {
    const { classes, headerData, metaData } = this.props;

    return (
      <Paper className={classes.paperBottomLine}>
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
          <Grid className={classes.leftColumn} item xs={12} sm={2}>
            <Paper className={classes.paper} />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            container
            //direction='column'
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  style={{ color: "red" }}
                  variant="caption"
                  gutterBottom
                >
                  {metaData.latest
                    ? ""
                    : "CAUTION: This is not latest version. Choose another version on the menu right top corner"}
                </Typography>
                <MyTextLink
                  variant="h2"
                  gutterBottom
                  data={headerData.name}
                  main="true"
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="subtitle1" gutterBottom>
                  E-MAIL: {headerData.email}
                </Typography>
              </Paper>
            </Grid>
            {headerData.phone ? (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" gutterBottom>
                    PHONE: {headerData.phone}
                  </Typography>
                </Paper>
              </Grid>
            ) : null}
            {headerData.links &&
            headerData.links[0] &&
            headerData.links[0].linkUrl
              ? headerData.links.map(link => {
                  return (
                    <Grid key={link.name} item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1" gutterBottom>
                          {link.name}:{" "}
                          <Link
                            target="_blank"
                            href={link.linkUrl}
                            className={classes.link}
                          >
                            {link.text}
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })
              : null}
          </Grid>
          <Grid className={classes.rightColumn} item xs={12} sm={2}>
            <Paper className={classes.paper} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export const CvHeader = withStyles(styles)(
  // connect(({ //profile: { currentProfile },
  //   common: { error, loading } }) => ({
  //   //currentProfile,
  //   error,
  //   loading
  // }))(
  CvHeaderBase
  // frontloadConnect(frontload, {
  //   onMount: true,
  //   onUpdate: false
  // })(Profile)
  //)
);
