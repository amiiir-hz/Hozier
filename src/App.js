import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Video from "./components/videos/Video";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <Home />} />
        <Route exact path="/videos" render={(routeProps) => <Video />} />
        <Route exact path="/contact" render={(routeProps) => <Contact />} />
      </Switch>
    );
  }
}
export default App;
