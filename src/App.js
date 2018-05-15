import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { HashRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to ShoppaPalooza</h1>
          </header>
          <div>{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
