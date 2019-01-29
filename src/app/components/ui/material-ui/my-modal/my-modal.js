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

class DialogSelection extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const {
      classes,
      onClose,
      selectedValue,
      title,
      datas,
      ...other
    } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <div>
          <List>
            {datas.map(data => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(data)}
                key={data.id}
              >
                {/* <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <ListItemText primary={data.contents} />
              </ListItem>
            ))}
            {/* <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem> */}
          </List>
        </div>
      </Dialog>
    );
  }
}

DialogSelection.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
  //selectedValue: PropTypes.string,
};

export const DialogSelectionWrapped = withStyles(styles)(DialogSelection);

class DialogShow extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, title, datas, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle onClick={this.handleClose} id="simple-dialog-title">
          {title}
        </DialogTitle>
        <div>
          {datas ? (
            <List>
              {datas.map(data => (
                <ListItem button onClick={this.handleClose} key={data.id}>
                  <ListItemText
                    primary={data.primary}
                    secondary={data.secondary}
                  />
                </ListItem>
              ))}
            </List>
          ) : null}
        </div>
      </Dialog>
    );
  }
}

DialogShow.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
  //selectedValue: PropTypes.string,
};

export const DialogShowWrapped = withStyles(styles)(DialogShow);

class AlertDialog extends React.Component {
  handleCloseNegative = () => {
    this.props.onCloseNegative();
  };

  handleClosePositive = () => {
    this.props.onClosePositive();
  };

  render() {
    const {
      classes,
      labelNegative,
      labelPositive,
      onCloseNegative,
      onClosePositive,
      title,
      datas,
      ...other
    } = this.props;

    return (
      <Dialog
        //open={this.state.open}
        onClose={this.handleCloseNegative}
        {...other}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <div>
            {datas ? (
              <List>
                {datas.map(data => (
                  <ListItem
                    button
                    //onClick={this.handleClose}
                    key={data.id}
                  >
                    <ListItemText
                      primary={data.primary}
                      secondary={data.secondary}
                    />
                  </ListItem>
                ))}
              </List>
            ) : null}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosePositive} color="primary">
            {labelPositive}
          </Button>
          <Button onClick={this.handleCloseNegative} color="primary" autoFocus>
            {labelNegative}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onCloseNegative: PropTypes.func,
  onClosePositive: PropTypes.func
  //selectedValue: PropTypes.string,
};

export const AlertDialogWrapped = withStyles(styles)(AlertDialog);

class HocDialog extends React.Component {
  handleCloseNegative = () => {
    this.props.onCloseNegative();
  };

  handleClosePositive = () => {
    this.props.onClosePositive();
  };

  render() {
    const {
      classes,
      labelNegative,
      labelPositive,
      onCloseNegative,
      onClosePositive,
      title,
      children,
      ...other
    } = this.props;

    return (
      <Dialog
        //open={this.state.open}
        onClose={this.handleCloseNegative}
        {...other}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <div>{children}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosePositive} color="primary">
            {labelPositive}
          </Button>
          <Button onClick={this.handleCloseNegative} color="primary" autoFocus>
            {labelNegative}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

HocDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onCloseNegative: PropTypes.func,
  onClosePositive: PropTypes.func
  //selectedValue: PropTypes.string,
};

export const HocDialogWrapped = withStyles(styles)(HocDialog);

////////////////////////exmaple of usage
export class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: {
      id: null,
      contents: "select please"
    },
    emails: [
      {
        id: 0,
        contents: "username@gmail.com"
      },
      {
        id: 1,
        contents: "user02@gmail.com"
      }
    ]
  };

  title = "title exmaple";

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography variant="subtitle1">
          Selected: {this.state.selectedValue.contents}
        </Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <DialogSelectionWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          title={this.title}
          datas={this.state.emails}
        />
      </div>
    );
  }
}
//
