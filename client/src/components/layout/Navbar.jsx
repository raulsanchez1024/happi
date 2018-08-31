import React, { Component } from "react";
import Logo from "../../img/nav-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <img src={Logo} alt="happiworkplace" className="bavbar-brand" />

          <div>
            <ul className="navbar-nav mr-auto ul-nav">
              <li className="nav-item">
                <a href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="/support">Support</a>
              </li>
              <li>
                <button className="hw-button">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
