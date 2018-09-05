import React, { Component } from "react";
import Logo from "../../img/nav-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a href="/"><img src={Logo} className="navbar-brand" /></a>
          
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mobile-nav">
            <i className="fa fa-bars"></i>
          </button>
          

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto nav-right">
              <li className="nav-item">
                <a href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="/support">Support</a>
              </li>
            </ul>
            <a href="/login"><button className="hw-button nav-button">Login</button></a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;