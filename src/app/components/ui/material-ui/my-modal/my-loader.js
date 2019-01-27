import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

//const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  //   avatar: {
  //     backgroundColor: blue[100],
  //     color: blue[600],
  //   },
};

class LoaderDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, title, children, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle onClick={this.handleClose} id="simple-dialog-title">
          {title}
        </DialogTitle>
        <div>{children}</div>
      </Dialog>
    );
  }
}

LoaderDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
  //selectedValue: PropTypes.string,
};

export const LoaderDialogWrapped = withStyles(styles)(LoaderDialog);
