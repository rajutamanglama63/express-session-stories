import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import store from "./store";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>
);
