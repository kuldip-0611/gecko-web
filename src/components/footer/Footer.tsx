import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-info d-flex flex-row justify-content-around align-items-center">
        <div>
          <p className="tag-line-text">
            Tagline will go here. Lorem ipsum d oler sit amet…
          </p>
          <p className="email-view">
            <a href="mailto:user@email.com">user@email.com</a>
          </p>
        </div>
        <div className="company-info-container d-flex flex-row justify-content-between align-items-start gap-4">
          <div>
            <p className="info-title">Address</p>
            <p className="info-desc">
              101 Office No,
              <br /> Road name, <br />
              India
            </p>
          </div>
          <div>
            <p className="info-title">Contacs</p>
            <p className="info-desc">
              user@email.com <br />
              (276) 341-7690
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 d-flex flex-row justify-content-around align-items-center">
        <img src={logo} />
        <div className="d-flex flex-row justify-content-center align-items-center">
          <a href="/about" className="navigation-text">
            About
          </a>
          <a href="/blogs" className="navigation-text">
            Blogs
          </a>
          <a href="/contact" className="navigation-text">
            Contact
          </a>
          <a href="/services" className="navigation-text">
            Services
          </a>
        </div>
        <p className="copy-rights-text">￼© 2022. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
