import React from "react";
import { render, hydrate } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import Loadable from "react-loadable";
import { Frontload } from "react-frontload";
import { ConnectedRouter } from "connected-react-router";
import createStore from "./redux/store";

import { RestyledApp } from "./destyler";
import "./index.css";

// Create a store and get back itself and its history object
const { store, history } = createStore();

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <RestyledApp />
      </Frontload>
    </ConnectedRouter>
  </ReduxProvider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
