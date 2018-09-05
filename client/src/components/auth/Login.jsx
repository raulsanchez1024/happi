import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login container">
        <div className="sqr container">
          <p className="text-center justify-content-center pt-4">
            Welcome back!
          </p>
          <hr className="login-hr" />
          <div className="d-flex flex-column mt-4">
            <input
              type="text"
              name="email"
              className="login-input pl-2 input-login"
              placeholder="Email"
            />
            <input
              type="text"
              name="password"
              className="login-input mt-4 pl-2 input-login"
              placeholder="Password"
            />
            <button className="mt-4 login-btn-login">Login to your account</button>
            <p className="text-center mt-2 account-login">Don't have an account? Sign up <a href="/sign-up">here</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// Updated login component