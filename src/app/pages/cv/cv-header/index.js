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
  link: {
    margin: theme.spacing.unit
  }
});

class CvHeaderBase extends Component {
  render() {
    const { classes, headerData } = this.props;

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
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <MyTextLink variant="h2" gutterBottom data={headerData.name} />
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
            {headerData.links
              ? headerData.links.map(link => {
                  return (
                    <Grid key={link.name} item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1" gutterBottom>
                          {link.name}:{" "}
                          <Link href={link.linkUrl} className={classes.link}>
                            {link.text}
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })
              : null}
          </Grid>
          <Grid item xs={12} md={2}>
            <Paper className={classes.paper}>right</Paper>
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
