import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./portofolio/components/Dashboard";
import Navbar from "./shared/components/Navigation/Navbar";
import About from "./portofolio/components/About";
import Portofolio from "./portofolio/components/Portofolio";
import Experiences from "./portofolio/components/Experiences";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portofolio" component={Portofolio} />
        <Route exact path="/experiences" component={Experiences} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
