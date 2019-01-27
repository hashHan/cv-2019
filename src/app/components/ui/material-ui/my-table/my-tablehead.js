import React from "react";
import PropTypes from "prop-types";
//import { withStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";

// Example
// roomsHead = [ // should have keys 'id', 'numeric', 'disablePadding', 'label'
// //  { id: 'index', numeric: false, disablePadding: true, label: 'Index' },
// { id: 'email', numeric: false, disablePadding: true, label: 'Email' },
// // { id: 'resourceId', numeric: true, disablePadding: true, label: 'resource ID' },
// // { id: 'userId', numeric: true, disablePadding: true, label: 'User ID' },
// { id: 'resourceName', numeric: false, disablePadding: true, label: 'Name' },
// { id: 'capacity', numeric: true, disablePadding: true, label: 'Capacity' },
// // { id: 'resourceType', numeric: false, disablePadding: true, label: 'Type' },
// // { id: 'resourceDetail', numeric: false, disablePadding: true, label: 'Detail' },
// // { id: 'beginDate', numeric: false, disablePadding: true, label: 'Begin Date' },
// // { id: 'endDate', numeric: false, disablePadding: true, label: 'End Date' },
// { id: 'active', numeric: false, disablePadding: true, label: 'Current Status' },
// { id: 'activate', numeric: false, disablePadding: true, label: 'Change Status',
//     callback: this.activateToggleHandler },
// ]

export const EnhancedTableHead = props => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    headData
  } = props;

  const createSortHandler = property => event => {
    //property = selected column id
    props.onRequestSort(event, property); //do sort
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount} //If true, the component appears indeterminate.
            checked={numSelected === rowCount} // If true, the component is checked.
            onChange={onSelectAllClick} // select all.
          />
        </TableCell>
        {headData.map(column => {
          return (
            <TableCell
              key={column.id}
              numeric={column.numeric} //If true, content will align to the right.
              padding={column.disablePadding ? "none" : "default"}
              sortDirection={orderBy === column.id ? order : false} // 	Set aria-sort direction. If orderBy = calorie and the toggled order of calorie = 'desc', then return desc
              style={{ textAlign: "center" }}
            >
              <Tooltip
                title="Click to Sort"
                placement={column.numeric ? "bottom-end" : "bottom-start"} //Tooltip placement
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === column.id} // show or hide arrows
                  direction={order} // arrow's shape for asc or desc
                  onClick={createSortHandler(column.id)} //do sort, "this" binds to the class "EnhancedTableHead" by providing second parameter of map function; "this" as thisarg
                >
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  //orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headData: PropTypes.array.isRequired
};
