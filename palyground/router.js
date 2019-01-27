import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import requireAuth from "../hoc/requireAuth";
import { ScrollToTopWrapper } from "../hoc/scrollcontrol";

//no auth required
//import { Home } from '../components/homes/homes';
import { Oauth } from "../containers/authentication/oauths/oauths";

//auth required
import { OauthsServer } from "../containers/authentication/oauths-server/oauths-server";
import { Logout } from "../containers/authentication/logouts/logouts";
import GeneralSettings from "../containers/general-settings/general-settings";
import Users from "../containers/users/users";
import { InviteUsers } from "../containers/users/invite-users/invite-users";
import { EditUsers } from "../containers/users/edit-users/edit-users";
//import MeetingRooms from '../containers/meeting-rooms/meeting-rooms';
import Rooms from "../containers/meeting-rooms/rooms";

import { Failtest } from "../containers/failtest/failtest";

const authOauthsServer = requireAuth(OauthsServer);
const authLogout = requireAuth(Logout);
const authGeneralSettings = requireAuth(GeneralSettings);
const authUsers = requireAuth(Users);
const authInviteUsers = requireAuth(InviteUsers);
const authEditUsers = requireAuth(EditUsers);
//const authMeetingRooms = requireAuth(MeetingRooms);
const authRooms = requireAuth(Rooms);

export const Router = () => {
  return (
    <ScrollToTopWrapper className="Routes">
      <Switch>
        {/* <Route path="/home" component={Home} /> */}
        <Route
          path="/"
          exact // for OAuth redirecting
          component={Oauth}
        />

        <Route path="/oauthserver" component={OauthsServer} />
        <Route path="/logout" component={authLogout} />
        <Route path="/generalsettings" component={authGeneralSettings} />
        <Route path="/users" component={authUsers} />
        <Route path="/invite" component={authInviteUsers} />
        <Route path="/editusers" component={authEditUsers} />
        <Route path="/meetingrooms" component={authRooms} />

        <Route path="/failtest" component={Failtest} />

        <Redirect to="/" />
      </Switch>
    </ScrollToTopWrapper>
  );
};
