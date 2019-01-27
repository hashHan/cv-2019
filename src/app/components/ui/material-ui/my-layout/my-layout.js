import React, { Component } from "react";
//import { connect } from 'react-redux';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Drawer from '@material-ui/core/Drawer';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//import Hidden from '@material-ui/core/Hidden';
//import Divider from '@material-ui/core/Divider';
//import MenuIcon from '@material-ui/icons/Menu';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

//import { Header } from '../../../header/header';

import { drawerWidth } from "./my-layout-constants";
import { MyAppbar } from "./my-appbar";
import { MyDrawer } from "./my-drawer";

//const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  MyAppbar: {
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  MyDrawer: {
    // width: drawerWidth,
    // //overflow: "auto",
    // //height: '100vh',
    // // position: 'fixed',
    // // top: '0%',
    // // left: '0%',
    // [theme.breakpoints.up('md')]: {
    //   position: 'relative',
    // },
  },
  toolbar: theme.mixins.toolbar, //for top spacing
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
    //marginTop : theme.spacing.unit * 10,
  }
});

// @connect(({ auth: { token, error } }) => ({
//     token
// }))

class ResponsiveDrawer extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    const newstate = !this.state.mobileOpen;
    this.setState({ mobileOpen: newstate });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MyAppbar
          className={classes.MyAppbar}
          handleDrawerToggle={this.handleDrawerToggle}
          token={this.props.token}
        />

        <MyDrawer
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          token={this.props.token}
        />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export const MyLayout = withStyles(styles, { withTheme: true })(
  ResponsiveDrawer
);
