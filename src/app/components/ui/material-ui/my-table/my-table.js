import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

import { EnhancedTableHead } from "./my-tablehead";
import { MyTableToolbar } from "./my-tabletoolbar";
import { fromJS, toJS, List } from "immutable";

import { loggerDev } from "../../../../lib/logger";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    //minWidth: 700,
  },
  tableWrapper: {
    //overflowX: 'auto',
    overflow: "auto"
  }
});

class EnhancedTable extends React.Component {
  state = {
    data: fromJS({
      order: "asc",
      orderBy: null, //this.props.orderBy, //name of key as string, 'userkey' or 'roomkey' ...
      selected: [],
      page: 0,
      rowsPerPage: 20,
      sorteddata: List(), //this.props.data,
      originaldata: List() // for prop check
    })
  };

  // componentDidMount () { //should be fixed to avoid setstate
  //     //this.props.dispatch(readUsers());
  //     this.setState({
  //         data: this.state.data
  //             .set('sorteddata', this.props.data)
  //             .set('orderBy', this.props.orderBy)
  //             .set('selected', List())
  //     },()=>{
  //         loggerDev('Mytable componentDidMount data: sorteddata: ',this.state.data.get('sorteddata').toJS());
  //         loggerDev('Mytable componentDidMount data: orderBy: ',this.state.data.get('orderBy'));
  //     });

  // }
  // // componentDidUpdate () { //should be fixed to avoid setstate
  // //     //this.props.dispatch(readUsers());
  // //     this.setState({
  // //         data: this.state.data
  // //             .set('sorteddata', this.props.data)
  // //             .set('orderBy', this.props.orderBy)
  // //             .set('selected', List())
  // //     },()=>{
  // //         loggerDev('Mytable componentDidMount data: sorteddata: ',this.state.data.get('sorteddata').toJS());
  // //         loggerDev('Mytable componentDidMount data: orderBy: ',this.state.data.get('orderBy'));
  // //     });

  // // }
  // componentWillReceiveProps(nextProps) {

  //     if (nextProps.data !== this.props.data) {
  //         loggerDev('Mytable componentWillReceiveProps this.props.data: ',this.props.data);
  //         loggerDev('Mytable componentWillReceiveProps nextProps.data: ',nextProps.data);
  //       //this.setState({ basicInfo: nextProps.basicInfo });
  //         this.setState({
  //             data: this.state.data
  //                 .set('sorteddata',nextProps.data)
  //                 .set('orderBy',nextProps.orderBy)
  //                 .set('selected', List())
  //         }),()=>{
  //             loggerDev('Mytable componentWillReceiveProps data: sorteddata: ',this.state.data.get('sorteddata').toJS());
  //             loggerDev('Mytable componentWillReceiveProps data: orderBy: ',this.state.data.get('orderBy'));;
  //         }
  //     }
  // }

  static getDerivedStateFromProps(props, state) {
    // Any time the current sorteddata changes,
    // Reset any parts of state that are tied to that sorteddata.
    // In this simple example, these are just sorteddata, orderBy and selected.
    if (props.data !== state.data.get("originaldata")) {
      return {
        data: state.data
          .set("originaldata", props.data)
          .set("sorteddata", props.data)
          .set("orderBy", props.orderBy)
          .set("selected", List())
      };
    }
    return null;
  }

  // array of column keys, first column must be keys!
  datakeys = this.props.headdata.map(column => column.id);

  handleRequestSort = (event, property) => {
    //property = selected column.id from my-tablehead = headdata.id from parents
    const orderBy = property;
    let order = "desc";
    //loggerDev('selected headdata.id: ', property);
    //loggerDev('current orderBy: ', this.state.data.get('orderBy'));
    if (
      this.state.data.get("orderBy") === property &&
      this.state.data.get("order") === "desc"
    ) {
      //order toggling
      order = "asc";
    }

    const sorteddata = // saved following new order
      order === "desc"
        ? this.state.data
            .get("sorteddata")
            .sort((a, b) => (b.get(orderBy) < a.get(orderBy) ? -1 : 1))
        : this.state.data
            .get("sorteddata")
            .sort((a, b) => (a.get(orderBy) < b.get(orderBy) ? -1 : 1));
    // const sorteddata = // saved following new order
    //     order === 'desc'
    //         ? this.props.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
    //         : this.props.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({
      data: this.state.data
        .set("sorteddata", sorteddata)
        .set("order", order)
        .set("orderBy", orderBy)
    });
  };

  sendSelectedToParent = () => {
    //should receive props 'sendtoparent'
    this.props.sendtoparent(this.state.data.get("selected"));
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(
        {
          data: this.state.data.set(
            "selected",
            fromJS(
              this.state.data
                .get("sorteddata")
                .toJS()
                .map(n => n[this.datakeys[0]], this)
            )
          )
        },
        () => {
          //loggerDev('Mytable selected: ', this.state.data.get('selected').toJS());
          this.sendSelectedToParent();
        }
      ); //select all check boxes
    } else {
      this.setState(
        {
          data: this.state.data.set("selected", List())
        },
        () => {
          //loggerDev('Mytable selected: ', this.state.data.get('selected').toJS());
          this.sendSelectedToParent();
        }
      );
    }
  };

  handleClick = (event, id) => {
    const selected = this.state.data.get("selected").toJS();
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState(
      {
        data: this.state.data.set("selected", fromJS(newSelected))
      },
      () => {
        //loggerDev('Mytable selected: ', this.state.data.get('selected').toJS());
        this.sendSelectedToParent();
      }
    );
  };

  handleChangePage = (event, page) => {
    this.setState({ data: this.state.data.set("page", page) });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      data: this.state.data.set("rowsPerPage", event.target.value)
    });
  };

  isSelected = id =>
    this.state.data
      .get("selected")
      .toJS()
      .indexOf(id) !== -1;

  createTableCell = (n, columnkeys, headdata) => {
    return columnkeys.map((key, index) => {
      // key = calrorie, index = 1
      let { numeric, bold, callback } = headdata.find(obj => obj.id === key); // add numeric and disablePadding property to tablecell
      let style = {};
      //let cell = null;
      let content = null;
      if (bold === "true") {
        style.fontWeight = "bold";
        //loggerDev('table cell style: ', style);
      }
      if (callback) {
        //loggerDev('callback: ',callback)
        content = (
          <a href="#" onClick={event => callback(event, n, n[key])}>
            {n[key]}
          </a>
        );
      } else {
        content = <div>{n[key]}</div>;
      }
      if (index === 0) {
        return (
          <TableCell
            key={key}
            component="th"
            scope="row"
            padding="default"
            numeric={numeric}
            style={style}
          >
            {content}
          </TableCell>
        );
      } else {
        if (n[key] === "False") {
          style.opacity = 0;
        }
        style.textAlign = "center";
        return (
          <TableCell key={key} numeric={numeric} style={style}>
            {content}
          </TableCell>
        );
      }
    });
  };

  render() {
    const { classes, headdata, tabletitle, data, toolbarData } = this.props;
    // const { sorteddata, order, orderBy, selected, rowsPerPage, page } = this.state;
    const sorteddata = this.state.data.get("sorteddata").toJS();
    //loggerDev('sorteddatta',sorteddata);
    //sorteddata = sorteddata === null ? data: sorteddata;
    //loggerDev('sorteddatta2',sorteddata);
    const order = this.state.data.get("order");
    const orderBy = this.state.data.get("orderBy");
    const selected = this.state.data.get("selected").toJS();
    const rowsPerPage = this.state.data.get("rowsPerPage");
    const page = this.state.data.get("page");
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, sorteddata.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <MyTableToolbar
          numSelected={selected.length}
          tabletitle={tabletitle}
          toolbarData={toolbarData}
        />
        {/* {children}
                </MyTableToolbar>  */}
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={sorteddata.length}
              headData={headdata}
            />
            <TableBody>
              {sorteddata
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  //loggerDev('row n: ',n);
                  const columnkeys = this.datakeys; // array of column keys
                  // loggerDev('columnkeys: ',columnkeys);
                  const isSelected = this.isSelected(n[columnkeys[0]]);
                  // loggerDev('isSelected: ', isSelected);
                  return (
                    <TableRow
                      hover
                      onClick={event =>
                        this.handleClick(event, n[columnkeys[0]])
                      }
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n[columnkeys[0]]}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      {//n is a object, columnkeys is array
                      this.createTableCell(n, columnkeys, this.props.headdata)}
                    </TableRow>
                  );
                }, this)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 10 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={sorteddata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  headdata: PropTypes.array.isRequired,
  tabletitle: PropTypes.string.isRequired
  //orderBy: PropTypes.string.isRequired,
};

export const MyTable = withStyles(styles)(EnhancedTable);
