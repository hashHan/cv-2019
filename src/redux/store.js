import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory, createMemoryHistory } from "history";
//import rootReducer from './modules';
import { rootReducer } from "./reducers";
import * as initial from "./initial";
import { mergeDeepRecord } from "../lib/immutable";
import { fromJS } from "immutable";

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default (url = "/") => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const enhancers = [];

  // Dev tools are helpful
  // if (process.env.NODE_ENV === 'development' && !isServer) {
  //   const devToolsExtension = window.devToolsExtension;

  //   if (typeof devToolsExtension === 'function') {
  //     enhancers.push(devToolsExtension());
  //   }
  // }

  const composeEnhancers =
    //process.env.NODE_ENV === "development" &&
    process.env.REACT_APP_CUSTOM_ENV !== "production" && !isServer // isuue of create react app vs server rendering
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null || compose;

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  // fromJS to make it immutable
  const initialState = !isServer ? fromJS(window.__PRELOADED_STATE__) : {};

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  /**
   * @private make sure the initial state is an immutable object
   * @param state
   */
  const prepareInitialState = state =>
    Object.keys(state).reduce((obj, key) => {
      obj[key] = mergeDeepRecord(initial[key], state[key]);
      return obj;
    }, {});

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  return {
    store,
    history
  };
};

//TO-DO: immutable set-up on ssr
//https://medium.com/@anderslatif/react-redux-with-immutable-js-and-ssr-7b309519de42
