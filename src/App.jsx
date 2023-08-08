import React from "react";
import logo from "./images/logo_no_text.png";
import "./styles.scss"; // Import the combined SCSS file



export default function App() {
  
  return (
    <div className="app">
      <div className="container">
        <div className="header bg-primary text-white text-center py-5">
          <img src={logo} alt="logo" className="header-logo" />
          <div className="back"></div>
          <h1 className="ml-2"><b>Pakcelerant</b></h1>
          <h1 className="mt-4">Pakcelerant<br /> "Accelerates Startups"</h1>
          <button className="btn btn-secondary mt-4">Get In Touch</button>
        </div>
        <div className="back"></div>
        <div className="content text-center py-5">
          <h2 className="mb-4">Spotting value, shaping Destiny</h2>
          <p className="mx-auto w-75">
            Our accelerator provides tailored mentorship, market insights, and
            investor connections to fuel your startup's success. Refine your
            product, perfect your pitch, and access valuable legal and financial
            guidance. Join our collaborative community and unlock growth
            opportunities while receiving continued support on your
            entrepreneurial journey. Together, we'll turn your dreams into reality
            and build a brighter future for all.
          </p>
        </div>
        <div className="end_image"></div>
        <div className="footer bg-primary text-white text-center py-5">
          <h2 className="mb-4">Investing in People</h2>
          <p className="mx-auto w-75">We look forward to hear your amazing story</p>
          <button className="btn btn-secondary mt-4">Get In Touch</button>
        </div>
        <div className="copy text-center py-5">
          <span className="float-left ml-4">&copy; 2023 Pakcelerant</span>
          <p className="float-right mr-4">"Accelerates Startups"</p>
        </div>
      </div>
    </div>
  );
}
