import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals.css";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "animate.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import reportWebVitals from "./reportWebVitals";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
