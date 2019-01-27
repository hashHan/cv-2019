import React from "react";
//import { connect } from 'react-redux';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
//import MenuIcon from '@material-ui/icons/Menu';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import { drawerWidth } from "./my-layout-constants";
import { Aux } from "../../../../hoc/auxiliary";

import { MyNavigation } from "../../../navigation/navigation";

const styles = theme => ({
  toolbar: theme.mixins.toolbar, // this is for vertical top margin
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    }
  }
});

const muiDrawer = props => {
  const { classes, handleDrawerToggle, token, mobileOpen } = props;

  // const drawer = (
  //   <Aux>
  //     <div className={classes.toolbar} />
  //     <Divider />
  //     <List>list1</List>
  //     <Divider />
  //     <List>list2</List>
  //   </Aux>
  // );

  return (
    <div onClick={handleDrawerToggle}>
      <div className={classes.toolbar} />
      <Divider />
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          //onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <MyNavigation token={token} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <MyNavigation token={token} />
        </Drawer>
      </Hidden>
    </div>
  );
};

muiDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired
  //token: PropTypes.string.isRequired //because could be null
};

export const MyDrawer = withStyles(styles, { withTheme: true })(muiDrawer);
