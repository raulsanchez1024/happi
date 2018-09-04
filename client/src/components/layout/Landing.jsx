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
            <input type="text" name="" />
            <button>Try it FREE</button>
          </div>
        </div>

        <div className="diduknow d-flex align-items-center">
          <h3 className="container d-flex justify-content-center">
            Did you know happy salespeople produce 37% greater sales?
          </h3>
        </div>

        <div className="value d-flex flex-column container">
          <h3 className="text-center mt-5">
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
                <button>Get it FREE</button>
                <button>Contact Sales</button>
              </div>
            </div>

            <hr />

            <div className="container d-flex flex-row">
              <div className="mr-auto">
                <p>Made in Denver 💙</p>
              </div>
              <div className="ml-auto">
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

{
  /* <div className="hero">
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
        </div> */
}

/* === Landing === */

// .landing {
//   font-family: "Montserrat";
// }

// p.hero-p {
//   margin-left: 300px;
//   margin-right: 300px;
//   margin-top: -10px;
//   font-weight: 300;
//   font-size: 15px;
// }

// .hero input {
//   width: 20%;
// }

// .bold {
//   font-weight: 500;
// }

// .hero {
//   margin-top: 150px;
// }

// .hero-h1 {
//   font-size: 45px;
//   font-weight: 500;
// }

// .trial-button {
//   position: relative;
//   height: 40px;
//   width: 115px;
//   margin-left: -1px;
//   background: linear-gradient(256.76deg, #bf7ef4 0%, #217cfb 100%);
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   color: #fff;
//   font-family: "Montserrat";
//   font-weight: 300;
// }

// .diduknow {
//   margin-top: 450px;
//   width: 100%;
//   height: 191px;

//   background: linear-gradient(62.2deg, #2b7dfb 0%, #b57ef5 100%);
// }

// .diduknow-h1 {
//   padding-top: 75px;
//   font-size: 25px;
//   font-weight: 100;
//   color: white;
// }

// .whatwedo-h3 {
//   padding-top: 75px;
//   padding-bottom: 30px;
//   font-size: 35px;
//   font-weight: 400;
// }

// p.whatwedo {
//   padding-bottom: 20px;
// }

// .arc {
//   width: 100%;
//   margin-bottom: -12px;
// }

// .footer {
//   background-color: #e3e3e3;
//   padding-bottom: 5px;
// }

// .readyv2 {
//   margin-top: -55px;
// }

// .ready {
//   color: #377efb;
//   font-weight: 300;
// }

// .getintouch {
//   color: #274f96;
//   font-weight: 300;
// }

// .contact-button {
//   height: 40px;
//   width: 135px;
//   background: #ffffff;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   margin-left: 30px;
// }

// hr {
//   margin-top: 75px;
//   margin-bottom: 20px;
// }

// .foot-content {
//   color: #adadad;
// }

// /* Responsive */
// @media (max-width: 800px) {
//   p.hero-p {
//     margin: auto;
//     font-weight: 300;
//     font-size: 15px;
//   }
//   .hero input {
//     width: 75%;
//     border-color: #3d3d3d;
//     border-width: 1px;
//     margin-bottom: 15px;
//     margin-top: 15px;
//     font-size: 20px;
//   }
//   .trial-button {
//     margin: auto;
//     padding-left: 15px;
//   }
//   .diduknow-h1 {
//     text-align: center;
//     padding-top: 55px;
//   }
//   .arc {
//     width: 100%;
//     margin-bottom: -3px;
//   }
//   .readyv2 {
//     margin-top: 30px;
//     margin-right: 15px;
//   }
//   .readyv1 {
//     display: flex;
//     justify-items: center;
//     padding-top: 50px;
//   }

//   .ready {
//     color: #377efb;
//     font-weight: 300;
//   }

//   .getintouch {
//     color: #274f96;
//     font-weight: 300;
//   }

//   .contact-button {
//     margin-top: 10px;
//     margin-left: -30px;
//     height: 40px;
//     width: 135px;
//     background: #ffffff;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     margin-left: 30px;
//   }
// }
