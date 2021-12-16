import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default App;
