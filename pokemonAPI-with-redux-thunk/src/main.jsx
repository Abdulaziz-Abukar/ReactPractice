import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <Provider store={store}>
    <App />
  </Provider>
);
