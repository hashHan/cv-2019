import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "row"
  },
  buttons: {
    // display: 'inline-block',
    // float: 'right',
  },
  title: {
    flex: "0 0 auto"
  }
});

// Example
// toolbarData = [
// {
//     callback: this.activateHandler,
//     title: 'Activate',
//     iconName: 'work_outline',
//     content: '',
// },
// {
//     callback: this.deactivateHandler,
//     title: 'Deactivate',
//     iconName: 'work_off',
//     content: '',
// },
// ]

const EnhancedTableToolbar = props => {
  const { numSelected, classes, tabletitle, toolbarData } = props;

  return (
    <Toolbar //Toolbar is title above a table
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0 // highlight when seleting over 1 element.
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            {tabletitle}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && toolbarData ? (
          toolbarData.map(data => {
            return (
              <Tooltip title={data.title}>
                <div>
                  <IconButton aria-label={data.title} onClick={data.callback}>
                    {data.iconName ? <Icon>{data.iconName}</Icon> : null}
                    {/* <DeleteIcon />  */}
                  </IconButton>
                  <span>{data.content ? data.content : null}</span>
                </div>
              </Tooltip>
            );
          })
        ) : (
          <Tooltip title="Please_Check_Check_Box">
            <div>
              <IconButton aria-label="Please_Check_Check_Box">
                <Icon>indeterminate_check_box</Icon>
              </IconButton>
              {/* <span>Select rows</span> */}
            </div>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  tabletitle: PropTypes.string.isRequired
};

export const MyTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);
