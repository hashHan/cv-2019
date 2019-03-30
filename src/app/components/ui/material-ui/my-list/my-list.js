import React, { Component } from "react";
import { fromJS } from "immutable";

import { withStyles } from "@material-ui/core/styles";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { MyTextLink } from "../my-typography/my-text-link";

import { Aux } from "../../../auxiliary";
import { setAutoFreeze } from "immer";

const styles = theme => ({
  list: {
    width: "100%",
    //maxWidth: 360,
    //width: "min-content",
    //minWidth: "200px",
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 0.3,
    paddingBottom: theme.spacing.unit * 0.3
  },
  nestedList: {
    paddingLeft: theme.spacing.unit * 4,
    pointerEvents: "none",
    fontStyle: "normal",
    paddingTop: theme.spacing.unit * 0.2,
    paddingBottom: theme.spacing.unit * 0.2
  },
  naiveListItem: {
    // "&:hover": {
    //   backgroundColor: "transparent"
    // },
    pointerEvents: "none",
    fontStyle: "normal",
    paddingTop: theme.spacing.unit * 0.2,
    paddingBottom: theme.spacing.unit * 0.2
  },
  dynamicListItem: {
    // "&:hover": {
    //   backgroundColor: "transparent"
    // },
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5
  },
  listSubHeader: {
    paddingTop: theme.spacing.unit * 0.3,
    paddingBottom: theme.spacing.unit * 0.3,
    lineHeight: "20px"
  }
});

class MyListBase extends Component {
  state = {
    open: {
      //
    }
  };

  // updatedAvengers = avengersMap.update('theHulk', 'Bruce Banner', (theHulkValue) => {
  //   return theHulkValue + ' Smash!';
  // });

  handleClick = name => {
    console.log("name: ", name);
    console.log("this.state.open[name]", this.state.open[name]);
    console.log("!this.state.open[name]", !this.state.open[name]);

    //update(key, defaultvalue if not exist, update fn if exsist)
    const newOpen = fromJS(this.state.open)
      .update(name, false, boolval => {
        //if not exist, set false 'then' also update.
        console.log("boolval: ", boolval);
        console.log("!boolval: ", !boolval);
        const newbool = !boolval;
        return newbool;
      })
      .toJS();

    this.setState({ open: newOpen }, () => {
      console.log("this.state.open after setState: ", this.state.open);
    });
  };

  render() {
    const { classes, title, data } = this.props;

    return (
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            className={classes.listSubHeader} //{{ root: classes.listSubHeader }}
          >
            <MyTextLink
              variant="body2"
              gutterBottom
              data={title}
              main={data.length ? "true" : null}
            />
            <MyTextLink
              variant="caption"
              gutterBottom
              data={title.sub}
              sub="true"
            />
          </ListSubheader>
        }
        className={classes.list}
      >
        {data.map(
          ({ callback, iconName, primary, sub, name, ...props }) =>
            !sub ? (
              <ListItem
                key={name}
                button
                onClick={callback}
                {...props}
                className={classes.naiveListItem}
              >
                <ListItemIcon>
                  <Icon className={classes.rightIcon}>{iconName}</Icon>
                </ListItemIcon>
                <ListItemText
                  inset
                  primary={
                    <MyTextLink variant="caption" gutterBottom data={primary} />
                  }
                />
              </ListItem>
            ) : (
              <Aux key={name}>
                <ListItem
                  button
                  onClick={() => this.handleClick(name)}
                  className={classes.dynamicListItem}
                >
                  <ListItemIcon>
                    <Icon className={classes.rightIcon}>{iconName}</Icon>
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={
                      <MyTextLink
                        variant="caption"
                        gutterBottom
                        data={primary}
                      />
                    }
                  />
                  {this.state.open[name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  in={this.state.open[name]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {sub.map(
                      ({ name, callback, iconName, primary, ...props }) => (
                        <ListItem
                          key={name}
                          button
                          className={classes.nestedList}
                          onClick={callback}
                          {...props}
                        >
                          {iconName ? (
                            <ListItemIcon>
                              <Icon className={classes.rightIcon}>
                                {iconName}
                              </Icon>
                            </ListItemIcon>
                          ) : null}
                          <ListItemText
                            inset
                            primary={
                              <MyTextLink
                                variant="caption"
                                gutterBottom
                                data={primary}
                              />
                            }
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </Collapse>
              </Aux>
            )
        )}
      </List>
    );
  }
}

export const MyList = withStyles(styles)(MyListBase);
