import React, { Component } from "react";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Page from "../../components/seo/page-with-meta";

import {
  getCurrentProfile,
  removeCurrentProfile
} from "../../../redux/actions";

const frontload = async props =>
  await props.dispatch(getCurrentProfile(+props.match.params.id));

class Profile extends Component {
  componentWillUnmount() {
    this.props.dispatch(removeCurrentProfile());
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.dispatch(getCurrentProfile(+nextProps.match.params.id));
    }

    return true;
  }

  render() {
    const { name, id, image } = this.props.currentProfile;

    return (
      <Page
        id="profile"
        title={name}
        description={`This is user profile number ${id}`}
        image={image}
      >
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>ID:</b> {id}
        </p>
        <img src={image} alt={name} style={{ width: "400px" }} />
      </Page>
    );
  }
}

export default connect(
  ({ profile: { currentProfile }, common: { error, loading } }) => ({
    currentProfile,
    error,
    loading
  })
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Profile)
);
