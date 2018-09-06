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
              <a href="/login" className="login-btn mt-2">Login</a>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;