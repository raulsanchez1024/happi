import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="hero">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 hero-h1">
                  Unlock valuable feedback
                </h1>
                <p className="lead hero-p">
                  <span className="bold">HappiWorkplace</span> is a web
                  application that helps business owners and managers get to
                  know their employees better and improve workplace environment
                  through employee feedback.
                </p>
                <div className="input-group mb-3 d-flex justify-content-center">
                  <input
                    type="text"
                    placeholder=" Your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <button className="input-group-prepend trial-button">
                    Try it FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diduknow">
          <div className="container">
            <h1 className="diduknow-h1 d-flex justify-content-center">
              Did you know happy salespeople produce 37% greater sales?
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
