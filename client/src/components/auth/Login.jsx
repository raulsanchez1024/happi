import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login container">
        <div className="sqr container">
          <p className="text-center login-p">Welcome back!</p>
          <div className="d-flex flex-column">
            <input
              type="text"
              name="email"
              className="login-input pl-2"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="login-input pl-2"
              placeholder="Password"
            />
            <a href="/login" className="login-btn2">
              Login to your account
            </a>
            <a href="/forgot" className="pt-2 text-center forgot-p">Forgot your password?</a>
          </div>
        </div>
        <p className="text-center pt-3 forgot-p">Don't have an account yet?<a href="/register"> Register now!</a></p>
      </div>
    );
  }
}

export default Login;

// Updated login component
