import React from "react";
import ReactDOM from "react-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

import App from "./App";

import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <GoogleOAuthProvider GoogleOAuthProvider clientId="588035918785-tc9d8q7bap7q3r5d2sv44f54ff3pi020.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
