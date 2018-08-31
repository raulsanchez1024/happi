import React, { Component } from "react";
import Logo from "../../img/nav-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <img src={Logo} />

          <div className="collapse navbar-collapse">
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
          </div>
          <button className="hw-button nav-button">Login</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;

// Hi – bug fixer
