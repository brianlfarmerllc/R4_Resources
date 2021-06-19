import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/experience">
          {" "}
          <Experience />{" "}
        </Route>
        <Route exact path="/contact">
          {" "}
          <Contact />{" "}
        </Route>
        <Route path="*">
          {" "}
          <Home />{" "}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
