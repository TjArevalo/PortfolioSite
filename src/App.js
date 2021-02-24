import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage, Portfolio, Navbar, Test } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/test" component={Test}></Route>
      </Switch>
    </div>
  );
}
