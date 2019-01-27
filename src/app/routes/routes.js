import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../components/routing/authenticated-route";
import UnauthenticatedRoute from "../components/routing/unauthenticated-route";
import Loadable from "react-loadable";

import NotFound from "../pages/not-found";

// const Homepage = Loadable({
//   loader: () => import(/* webpackChunkName: "homepage" */ '../pages/homepage'),
//   loading: () => null,
//   modules: ['homepage']
// });

// const About = Loadable({
//   loader: () => import(/* webpackChunkName: "about" */ '../pages/about'),
//   loading: () => null,
//   modules: ['about']
// });

// const Dashboard = Loadable({
//   loader: () => import(/* webpackChunkName: "dashboard" */ '../pages/dashboard'),
//   loading: () => null,
//   modules: ['dashboard']
// });

// const Login = Loadable({
//   loader: () => import(/* webpackChunkName: "login" */ '../pages/login'),
//   loading: () => null,
//   modules: ['login']
// });

// const Logout = Loadable({
//   loader: () => import(/* webpackChunkName: "logout" */ '../pages/logout'),
//   loading: () => null,
//   modules: ['logout']
// });

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "../pages/profile"),
  loading: () => null,
  modules: ["profile"]
});

export default () => (
  <Switch>
    {/* <Route exact path="/" component={NotFound} /> */}

    <Route exact path="/profile/:id" component={Profile} />

    {/* <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <UnauthenticatedRoute exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={NotFound} />
  </Switch>
);
