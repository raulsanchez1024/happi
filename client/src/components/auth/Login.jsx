import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login container">
        <div className="sqr container">
          <p className="text-center login-p">Welcome back!</p>
          <div className="d-flex flex-column">
            <input
              type="email"
              name="email"
              className="login-input pl-2"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              className="login-input pl-2"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <a href="/login" onClick={this.onSubmit} className="login-btn2">
            Login to your account
            </a>
            <a href="/forgot" className="pt-2 text-center forgot-p">
              Forgot your password?
            </a>
          </div>
        </div>
        <p className="text-center pt-3 forgot-p">
          Don't have an account yet?
          <a href="/register"> Register now!</a>
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);