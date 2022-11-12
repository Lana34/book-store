import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { MainRoutes } from "./routes/MainRoutes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
