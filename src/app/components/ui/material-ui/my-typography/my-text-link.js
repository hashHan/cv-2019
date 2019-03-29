import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  link: {
    //margin: theme.spacing.unit
    margin: 0
  },
  subLink: {
    //margin: theme.spacing.unit,
    fontStyle: "oblique"
  },
  mainLink: {
    //margin: theme.spacing.unit,
    fontWeight: "bolder"
  },
  typography: {
    display: "inline-block",
    margin: 0,
    padding: "0 16px",
    lineHeight: 1.2
  },
  sub: {
    //margin: theme.spacing.unit,
    //color: "red",
    fontStyle: "oblique"
  },
  main: {
    //margin: theme.spacing.unit,
    fontWeight: "bolder"
  }
});

const MyTextLinkBase = props => {
  const { classes, variant, gutterBottom, sub, main } = props;
  return (
    <Typography
      variant={variant}
      gutterBottom={gutterBottom}
      className={classes.typography}
    >
      {props.data.linkUrl ? (
        <Link
          target="_blank"
          href={props.data.linkUrl}
          className={
            sub ? classes.subLink : main ? classes.mainLink : classes.link
          }
        >
          {props.data.text}
        </Link>
      ) : (
        <span
          className={sub ? classes.sub : main ? classes.main : classes.link}
        >
          {props.data.text}
        </span>
      )}
    </Typography>
  );
};

export const MyTextLink = withStyles(styles)(MyTextLinkBase);
