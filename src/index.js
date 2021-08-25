import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Store>
      <App />
    </Store>
  </Router>,
  document.getElementById("root")
);
