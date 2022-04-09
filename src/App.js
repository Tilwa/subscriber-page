import React, { useState } from "react";

import "./app.css";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
function App() {
  return (
    <>
      <Form />
      {/* <div className="hero">
        <div className="logo-left-div"></div>
        <div className="form-right-div">
          <div className="main-right">
            <div className="supplier-login">
              <div>
                {" "}
                <h1 className="supplier-heading">Supplier Login </h1>
              </div>
              <div>
                {" "}
                <button className="top-btn">Login</button>
                <button className="top-btn">Signup</button>
              </div>
            </div>
            <div className="contact-from">sss</div>
          </div>
        </div>
      </div>
      <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
