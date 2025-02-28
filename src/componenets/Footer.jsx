import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background Pattern */}
      <div className="footer_pattern">
        <img src="/assets/images/big-icon-3.png" alt="Footer Pattern" />
      </div>

      {/* Contact Section */}
      <div className="footer_detail">
        <div className="content-heading">
          <h3 className="text-light">CONTACT US</h3>
        </div>

        {/* Contact Details */}
        <div className="footer_div">
          <div className="row bordbot">
            <div className="col-lg-6 col-md-12 text-center">
              <h5>FOR PARTICIPATION</h5>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <h5>FOR PARTNERSHIP OPPORTUNITY</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12 text-center">
              <h6 className="text-light text-md-center text-start">VIVEK SHETH</h6>
              <div className="d-flex justify-content-center flex-wrap">
                <p className="text-light">
                  <FaPhone /> +91 9876543210
                </p>
                <p className="text-light">
                  <FaEnvelope /> vivek@gmail.com
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <h6 className="text-light text-md-center text-start">RAHUL VERMA</h6>
              <div className="d-flex justify-content-center flex-wrap">
                <p className="text-light">
                  <FaPhone /> +91 9123456789
                </p>
                <p className="text-light">
                  <FaEnvelope /> rahul@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Social Links */}
        <div className="copyright d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p>Copyright © {new Date().getFullYear()} Intersec. All rights reserved.</p>
          <div className="icons d-flex gap-3">
            <a href="#" className="text-light"><FaFacebookF /></a>
            <a href="#" className="text-light"><FaInstagram /></a>
            <a href="#" className="text-light"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
