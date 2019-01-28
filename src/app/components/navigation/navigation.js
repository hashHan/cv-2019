import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
//import Divider from '@material-ui/core/Divider';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';

import { Aux } from "../auxiliary";

const styles = theme => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar // this is for vertical top margin
});

const home = props => <Link to="/" {...props} />;
const logout = props => <Link to="/logout" {...props} />;
const oauth = props => <Link to="/oauth" {...props} />;

const Navigation = props => {
  const { classes, token } = props;
  return (
    <List
      //onClick={handleDrawerToggle}
      component="nav"
    >
      <div className={classes.toolbar} />
      <ListItem button component={home}>
        <ListItemText primary="Home" />
      </ListItem>
      {token ? (
        <Aux>
          <ListItem button component={logout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </Aux>
      ) : (
        <Aux>
          <ListItem button component={oauth}>
            {/* <ListItem button component="a" href="/"> */}
            <ListItemText primary="Login" />
          </ListItem>
        </Aux>
      )}
    </List>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
  //token // token could be null
};

export const MyNavigation = withStyles(styles)(Navigation);
