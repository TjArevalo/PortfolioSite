import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage, Test } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/test" component={Test}></Route>
      </Switch>
    </div>
  );
}
