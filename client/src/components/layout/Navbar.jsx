import React, { Component } from "react";
import Logo from "../../img/nav-logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto nav-right">
        <li className="nav-item">
          <a href="/feedback">Feedback</a>
        </li>
        <li className="nav-item">
          <a href="/add-employee">Add Employee</a>
        </li>
        <li className="nav-item">
          <a href="/settings">Settings</a>
        </li>
        <a href="/logout" className="login-btn mt-2" onClick={this.onLogoutClick.bind(this)}>
          Logout
        </a>
      </ul>
    );

    const guestLinks = (
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
        <a href="/login" className="login-btn mt-2">
          Login
        </a>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a href="/">
            <img src={Logo} className="navbar-brand" />
          </a>

          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <i className="fa fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            { isAuthenticated ? authLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
