import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      {/* Left Leaf Pattern */}
      <div className="leaf_pattern left">
        <img src="assets/images/leaf_left.png" alt="Left Leaf Pattern" />
      </div>

      {/* Banner Content */}
      <div className="container">
        <div className="banner_content">
          <div className="logo iamal_logo">
            <a href="#">
              <img src="assets/images/iamal_logo.png" alt="IAMAL Logo" />
            </a>
          </div>

          <div className="para">
            <span>PRESENT</span>
          </div>

          <div className="logo intersec_logo">
            <a href="#">
              <img src="assets/images/intersec_logo.png" alt="Intersec Logo" />
            </a>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <a href="#" className="btn">
              <span>Past Participants</span>
            </a>
            <a href="#" className="btn">
              <span>Become a Partner</span>
            </a>
          </div>

          {/* Inner Content */}
          <div className="banner_inner_content">
            <h3>Ideate. Network. Collaborate.</h3>

            <p>
              <span>
                <i className="fa fa-calendar-alt"></i>
              </span>{" "}
              15<sup>th</sup> - 17<sup>th</sup> April 2022
            </p>

            <p>
              <span>
                <i className="fa fa-map-marker-alt"></i>
              </span>{" "}
              The Zuri White Sands, Goa
            </p>

            <button className="allBtn">REQUEST AN INVITE</button>
          </div>
        </div>
      </div>

      {/* Right Leaf Pattern */}
      <div className="leaf_pattern right">
        <img src="assets/images/leaf_right.png" alt="Right Leaf Pattern" />
      </div>
    </section>
  );
};

export default Banner;
