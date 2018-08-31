import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="hero">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 hero-h1">Improve workplace happiness</h1>
                <p className="lead hero-p">
                  <span className="bold">HappiWorkplace</span> is a web application that helps
                  business owners and managers get to know their employees
                  better and improve workplace environment through employee
                  feedback.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control trial-input"
                    placeholder="Your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <button className="input-group-prepend trial-button">Try it FREE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
