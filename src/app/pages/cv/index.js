import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../components/seo/page-with-meta";

import { getCvAll } from "../../../redux/actions";

import { withStyles } from "@material-ui/core/styles";

import { Aux } from "../../components/auxiliary";

import { CvHeader } from "./cv-header";
import { CvBody } from "./cv-body";
import { CvFooter } from "./cv-footer";

const frontload = async props => await props.dispatch(getCvAll());

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
    alignItems: "center",
    renderFlag: false,
    cvList: null,
    cvChoosen: null
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  componentDidMount() {
    this.props.dispatch(getCvAll()).then(() => {
      this.setState({
        renderFlag: true,
        cvList: this.props.cvsFetched,
        cvChoosen: this.props.cvsFetched.get(0) //first item default.
      });
    });
  }

  // componentWillUnmount() {
  //   //this.props.dispatch(removeCurrentProfile());
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     //this.props.dispatch(getCurrentProfile(+nextProps.match.params.id));
  //   }

  //   return true;
  // }

  render() {
    const { classes } = this.props;
    // const { cvMeta, headerData, footerData, bodyData } = this.state.cvChoosen.toJS();
    const cvToRender = this.state.cvChoosen
      ? this.state.cvChoosen.toJS()
      : null;

    return (
      <Page
        id="cv"
        title="cv"
        description={`cv page of haeseong han`}
        //image={image}
      >
        <p>
          {cvToRender
            ? `${cvToRender.cvMeta.owner}'s cv updated in ${
                cvToRender.cvMeta.timestamp
              }`
            : "CV page"}
        </p>
        {this.state.renderFlag && cvToRender ? (
          <Aux>
            <CvHeader headerData={cvToRender.headerData} />
            <CvBody bodyData={cvToRender.bodyData} />
            <CvFooter footerData={cvToRender.footerData} />
          </Aux>
        ) : null}
      </Page>
    );
  }
}

export default withStyles(styles)(
  connect(({ cvs }) => ({
    cvsFetched: cvs.get("cvs"),
    error: cvs.get("error")
  }))(
    frontloadConnect(frontload, {
      onMount: true,
      onUpdate: false
    })(CV)
  )
);
