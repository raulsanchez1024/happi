import React, { Component } from "react";
import Arc from "../../img/lolol.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="hero container">
          <h1 className="d-flex justify-content-center justify-content-md-center text-center">
            Unlock valuable feedback
          </h1>
          <p className="lead hero-p">
            <span className="bold">HappiWorkplace</span> is a web application
            that helps business owners and managers get to know their employees
            better and improve workplace environment through employee feedback.
          </p>
          <div className="d-flex flex-row justify-content-center justify-content-md-center">
            <input type="text" placeholder="Your email" className="pl-2" />
            <button className="trial-btn">Try it FREE</button>
          </div>
        </div>

        <div className="diduknow d-flex align-items-center">
          <h3 className="container d-flex justify-content-center d3">
            Did you know happy salespeople produce 37% greater sales?
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

        <div>
          <img src={Arc} alt="arc" className="arc" />
          <div className="footer">
            <div className="container d-flex flex-row">
              <div className="mr-auto">
                <h3>Ready to get started?</h3>
              </div>
              <div className="ml-auto">
                <button className="mr-4 trial-btn">Try it FREE</button>
                <button className="contact-btn">Contact Sales</button>
              </div>
            </div>

            <hr />

            <div className="container d-flex flex-row">
              <div className="mr-auto footer-p">
                <p>Made w/ 💙 in Denver, CO</p>
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

export default Landing;