import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//import { Header } from '../../../header/header';

const styles = theme => ({
  root: {
    // marginLeft: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flex: 1
    //marginLeft: 'auto',
  },
  rightButtons: {
    //marginLeft: 'auto',
  }
});

const muiAppbar = props => {
  const { classes, handleDrawerToggle, token } = props;

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
          style={{ textAlign: "right" }}
        >
          Haeseong Han's CV
        </Typography>
        {/* <Header className={classes.rightButtons} token={token}/> */}
      </Toolbar>
    </AppBar>
  );
};

muiAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired
  //token: PropTypes.string.isRequired //because could be null
};

export const MyAppbar = withStyles(styles, { withTheme: true })(muiAppbar);
