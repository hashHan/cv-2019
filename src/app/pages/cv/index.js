import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../components/seo/page-with-meta";

import { withStyles } from "@material-ui/core/styles";
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

import { CvHeader } from "./cv-header";
import { CvBody } from "./cv-body";
import { CvFooter } from "./cv-footer";
// import {
//   getCurrentProfile,
//   removeCurrentProfile
// } from "../../../redux/actions";

// const frontload = async props =>
//   await props.dispatch(getCurrentProfile(+props.match.params.id));

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    //height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    height: "100%",
    width: "100%",
    color: theme.palette.text.secondary
  }
});

class CV extends Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  componentWillUnmount() {
    //this.props.dispatch(removeCurrentProfile());
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      //this.props.dispatch(getCurrentProfile(+nextProps.match.params.id));
    }

    return true;
  }

  render() {
    //const { name, id, image } = this.props.currentProfile;
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return (
      <Page
        id="cv"
        title="cv"
        description={`cv page of haeseong han`}
        //image={image}
      >
        <p>cv page</p>
        <CvHeader />
        <CvBody />
        <CvFooter />
      </Page>
    );
  }
}

export default withStyles(styles)(
  connect(({ //profile: { currentProfile },
    common: { error, loading } }) => ({
    //currentProfile,
    error,
    loading
  }))(
    CV
    // frontloadConnect(frontload, {
    //   onMount: true,
    //   onUpdate: false
    // })(Profile)
  )
);
