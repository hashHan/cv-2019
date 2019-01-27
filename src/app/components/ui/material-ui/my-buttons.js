import React from "react";
import PropTypes from "prop-types";
//import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Delete from "@material-ui/icons/Delete";
//import FileUpload from "@material-ui/icons/FileUpload";
//import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

//import Save from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    "text-decoration": "none"
    // padding: [0, 0],
    // minHeight: 0,
    // minWidth: 0,
  },
  iconButton: {
    //color: theme.palette.text.secondary,
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
    // marginTop: 0,
    // marginBottom: 0,
  },
  iconSmall: {
    fontSize: 20
  },
  label: {},
  google: {
    margin: theme.spacing.unit,
    background: "white",
    color: "black"
  },
  ms: {
    margin: theme.spacing.unit,
    background: "#e73f24"
    //color: 'black',
  },
  slack: {
    margin: theme.spacing.unit,
    background: "white",
    color: "black"
  },
  GoogleMSText: {
    marginLeft: theme.spacing.unit,
    width: theme.spacing.unit * 25
  },
  slackMSText: {
    marginLeft: theme.spacing.unit
  }
});

/////delete button ///
const DeleteButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant="raised"
      color="secondary"
    >
      <span className={classes.label}>{children}</span>
      <Delete className={classes.rightIcon} />
    </Button>
  );
};

// const DeleteStyles = theme => ({
//   button: {
//     background: theme.colorPrimary
//   },
//   label: {
//     fontWeight: 'bold'
//   }
// })

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired
};

/////Send button ///
const SendButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant="raised"
      color="primary"
    >
      <span className={classes.label}>{children}</span>
      <Icon className={classes.rightIcon}>send</Icon>
    </Button>
  );
};

SendButton.propTypes = {
  classes: PropTypes.object.isRequired
};

// /////Upload button ///
// const UploadButton = props => {
//   const { classes, children, ...other } = props;
//   return (
//     <Button
//       {...other}
//       className={classes.button}
//       variant="raised"
//       color="default"
//     >
//       <span className={classes.label}>{children}</span>
//       <FileUpload className={classes.rightIcon} />
//     </Button>
//   );
// };

// UploadButton.propTypes = {
//   classes: PropTypes.object.isRequired
// };

/////Add button ///
const AddButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant="raised"
      color="primary"
    >
      <span className={classes.label}>{children}</span>
      <Icon className={classes.rightIcon}>arrow_drop_down</Icon>
    </Button>
  );
};

/////Cancel button ///
const CancelButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant="raised"
      color="secondary"
    >
      <span className={classes.label}>{children}</span>
      <Icon className={classes.rightIcon}>close</Icon>
    </Button>
  );
};

/////default button ///
const DefaultButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant="raised"
      color="primary"
    >
      {children}
    </Button>
  );
};

DefaultButton.propTypes = {
  classes: PropTypes.object.isRequired
};

/////Universial button ///
const UniversialButton = props => {
  const {
    classes,
    variant,
    color,
    rightIcon,
    iconName,
    children,
    ...other
  } = props;
  return (
    <Button
      {...other}
      className={classes.button}
      variant={variant}
      color={color}
    >
      {!rightIcon ? <Icon className={classes.leftIcon}>{iconName}</Icon> : null}
      <span className={classes.label}>{children}</span>
      {rightIcon ? <Icon className={classes.rightIcon}>{iconName}</Icon> : null}
    </Button>
  );
};

/////Universial icon button ///
const UniversialIconButton = props => {
  const { classes, iconName, children, title, callback, ...other } = props;
  return (
    <Tooltip title={title}>
      <IconButton {...other} aria-label={title} className={classes.iconButton}>
        {iconName ? <Icon>{iconName}</Icon> : null}
      </IconButton>
      {/* <span className={classes.label}>
        {children}
      </span> */}
    </Tooltip>
  );
};

/////auth button ///
const OauthClientButton = props => {
  const { classes, children, ms, ...other } = props;
  return (
    <Button
      {...other}
      className={!ms ? classes.google : classes.ms}
      variant="raised"
      color="primary"
    >
      {/* <span className={classes.label}>
        {children}
      </span> */}
      {/* <Icon className={classes.rightIcon}>send</Icon> */}
      {!ms ? (
        <img src="" width="24" height="24" alt="google sign in button" />
      ) : (
        <img src="" width="24" height="24" alt="google sign in button" />
      )}
      <span className={classes.GoogleMSText}>
        Sign in with {!ms ? "Google" : "Office 365"}
      </span>
    </Button>
  );
};

/////auth button ///
const OAuthServerButton = props => {
  const { classes, children, ...other } = props;
  return (
    <Button
      {...other}
      className={classes.slack}
      variant="raised"
      color="primary"
      href="/api/auth/slack"
    >
      <img src="" width="24" height="24" alt="Slack button" />
      <span className={classes.slackMSText}>Sign in with Slack</span>
      {children}
    </Button>
  );
};

export const MyDeleteButton = withStyles(styles)(DeleteButton);
export const MySendButton = withStyles(styles)(SendButton);
//export const MyUploadButton = withStyles(styles)(UploadButton);
export const MyAddButton = withStyles(styles)(AddButton);
export const MyCancelButton = withStyles(styles)(CancelButton);
export const MyDefaultButton = withStyles(styles)(DefaultButton);
export const MyUniversialButton = withStyles(styles)(UniversialButton);
export const MyUniversialIconButton = withStyles(styles)(UniversialIconButton);
export const MyOauthClientButton = withStyles(styles)(OauthClientButton);
export const MyOAuthServerButton = withStyles(styles)(OAuthServerButton);
