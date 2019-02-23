import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 48;

export class MyMenu extends React.Component {
  state = {
    anchorEl: null,
    selected: null
  };

  handleClick = (callbackParam, customKey) => {
    //this.setState({ anchorEl: event.currentTarget });
    this.props.receivedCallback(callbackParam);
    this.setState({
      selected: customKey
    });
    this.handleClose();
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { datas } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5
              //width: 200,
            }
          }}
        >
          {datas.map(each => (
            <MenuItem
              key={each.customKey}
              selected={each.customKey === this.state.selected}
              onClick={() =>
                this.handleClick(each.callbackParam, each.customKey)
              }
            >
              {each.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

//export default LongMenu;
