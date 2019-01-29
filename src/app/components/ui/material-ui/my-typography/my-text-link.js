import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  link: {
    margin: theme.spacing.unit
  }
});

const MyTextLinkBase = props => {
  const { classes, variant, gutterBottom } = props;
  return (
    <Typography variant={variant} gutterBottom={gutterBottom}>
      {props.data.linkUrl ? (
        <Link
          target="_blank"
          href={props.data.linkUrl}
          className={classes.link}
        >
          {props.data.text}
        </Link>
      ) : (
        props.data.text
      )}
    </Typography>
  );
};

export const MyTextLink = withStyles(styles)(MyTextLinkBase);
