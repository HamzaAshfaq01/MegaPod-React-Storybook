import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "elegant-icons/style.css";
import "./styles/css/slicknav.min.css";
import "./styles/css/slicknav.min.css";
import "./styles/css/magnific-popup.css";
import "./styles/css/font-awesome.min.css";
import "./styles/css/elegant-icons.css";
import "./styles/sass/style.scss";
import store from "./utils/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
