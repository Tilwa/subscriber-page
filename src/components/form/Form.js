import React from "react";
import "./Form.css";

const Form = () => {
  const fasbazarAccount = () => {
    window.open("https://fasbazar.com/my-account/", "_self");
  };
  return (
    <div className="main">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          {/* div no 1 */}
          <div className="supplier-title-btns">
            {/* <div className="login">
              <h1>
                Login
                <hr className="line" />
              </h1>
            </div>
            <div className="supplier-btns-div">
              <button className="top-btn">Login</button>
              <button className="top-btn">Signup</button>
            </div> */}
            <h1>Welcome to Merchandising</h1>
          </div>

          {/* div no 2 */}

          <div className="inputs">
            <h2 className="contact-us">
              Contact Us
              <hr className="contact-line" />
            </h2>
            <div className="input">
              <input
                className="input-styl"
                type="text"
                placeholder="Company Name"
              />
              <input
                className="input-styl"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input-styl"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="input-styl"
                type="email"
                placeholder="Email Address"
              />
              <input className="input-styl" type="tel" placeholder="Phone" />
              <input
                className="input-styl"
                type="text"
                placeholder="Select Categories"
              />
              <button className="submit-btn">Submit</button>
            </div>
          </div>

          {/* div no 3 */}
          <div className="last-div">
            <div className="apple-gmail">
              <button className="last-btn1" onClick={fasbazarAccount}>
                <i id="apple" class="devicon-apple-original"></i>Log in
              </button>

              <button className="last-btn2" onClick={fasbazarAccount}>
                <i id="google" class="devicon-google-plain colored"></i>Sign in
              </button>
            </div>
            <p className="last-para">
              Don't have an account?{" "}
              <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
