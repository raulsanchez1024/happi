import React, { Component } from "react";
import Arc from "../../img/lolol.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="hero">
          <div className="container">
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

        <div className="whatwedo">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4 whatwedo-h3">
                  How will HappiWorkplace help your business?
                </h3>
                <p className="whatwedo text-center">
                  1. You’ll learn how your employees feel about your business,
                  the work, the culture, etc.
                </p>
                <p className="whatwedo text-center">
                  2. Everyone will learn what everyone else in the company is
                  working on.
                </p>
                <p className="whatwedo text-center">
                  3. Everyone will learn more about eachother in the company as
                  people.
                </p>
                <p className="whatwedo text-center">
                  4. Increase employee engagement by creating an open, honest
                  company culture.
                </p>
                <p className="whatwedo text-center">
                  5. Gain insights that lead to real changes on day-to-day
                  opertaions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-footer">
          <img src={Arc} className="arc" />
          <div className="footer">
            <div className="container">
              <div className="readyv1 d-flex justify-content-start">
                <h4>
                  <span className="ready">Ready to start?</span> <br />{" "}
                  <span className="getintouch">
                    Get in touch or start your FREE trial.
                  </span>
                </h4>
              </div>
              <div className="readyv2 d-flex justify-content-end">
                <button className="trial-button">Try it FREE</button>
                <button className="contact-button">Contact Sales</button>
              </div>
            </div>
            <hr />
            <div className="container d-flex foot-content">
              <div className="mr-auto">
                <p>Created in Denver, CO</p>
              </div>
              <div>
                <p>© HappiWorkplace 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
