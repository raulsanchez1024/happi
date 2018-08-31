import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing.jsx";
import Navbar from "./components/layout/Navbar.jsx";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route path="/" exact component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
