import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="hero container">
          <h1 className="d-flex justify-content-center justify-content-md-center text-center">
            Unlock valuable feedback
          </h1>
          <div className="hero-div">
            <p className="lead hero-p">
              <span className="bold">HappiWorkplace</span> is a web application
              that helps business owners and managers get to know their
              employees better and improve workplace environment through
              employee feedback.
            </p>
          </div>
          <div className="d-flex flex-row justify-content-center justify-content-md-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-2 input-try"
              name="email"
            />
            <a href="/register" className="trial-btn">
              <span>Try it FREE</span>
            </a>
          </div>
          <p className="text-center trial-p mt-2">
            Free 13-day trial • No CC required • Cancel anytime
          </p>
        </div>

        <div className="diduknow d-flex align-items-center">
          <h3 className="container d-flex justify-content-center d3">
            Did you know that happy employees outperform the competition by 20%?
          </h3>
        </div>

        <div className="value d-flex flex-column container">
          <h3 className="text-center">
            How will HappiWorkplace help your business?
          </h3>
          <p className="whatwedo text-center mt-4">
            1. You’ll learn how your employees feel about your business, the
            work, the culture, etc.
          </p>
          <p className="whatwedo text-center">
            2. Everyone will learn what everyone else in the company is working
            on.
          </p>
          <p className="whatwedo text-center">
            3. Everyone will learn more about eachother in the company as
            people.
          </p>
          <p className="whatwedo text-center">
            4. Increase employee engagement by creating an open, honest company
            culture.
          </p>
          <p className="whatwedo text-center">
            5. Gain insights that lead to real changes on day-to-day opertaions.
          </p>
        </div>

        <div className="get-it-free">
          <h3 className="text-center pb-2 ">Ready to get started?</h3>
          <div className="d-flex flex-row justify-content-center justify-content-md-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-2 input-try"
              name="email"
            />
            <a href="/register" className="trial-btn">
              <span>Try it FREE</span>
            </a>
          </div>
        </div>

        <div>
          <div className="footer">
            <hr />

            <div className="container d-flex flex-row">
              <div className="mr-auto footer-p">
                <p>Made with 💙 in Denver, CO</p>
              </div>
              <div className="ml-auto footer-p">
                <p>© HappiWorkplace 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
