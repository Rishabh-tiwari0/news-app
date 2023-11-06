import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";

export default class App extends Component {
  c = "john doe";
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
