import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </div>
  );
}
