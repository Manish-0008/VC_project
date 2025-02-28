import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-lg-7 align-self-center">
            <div className="about-content">
              <div className="main-heading-area">
                <p className="subheading">About Intersec</p>
                <h2 className="heading">How it All Started</h2>
              </div>
              <p>
                It all started in the year 2019 when IAMAI launched the first edition of Intersec. After a superb
                reception of the event, Intersec became an annual property of IAMAI. Fondly called as the art of{" "}
                <i>‘UNCONFERENCING’</i>, Intersec is a fun-filled meet and greet which isn't just another conference or
                off-site which is full of speakers and listeners. Here, you get ample time and opportunity to meet and
                interact with new people and explore a lot of business synergies. So, you see, it’s more focused on
                conversations than on addresses, speeches or lectures.
              </p>
              <p>
                Attended by more than 60 unique brands in the last two editions, Intersec is a 2 night's and 3 day's
                residential assembly of Digital and Marketing Heads of brands catering to industries like D2C, FMCG,
                Retail, E-Commerce, Gaming, BFSI, FinTech, Travel & Hospitality and many more! A space to share 1st
                hand insights and an experience to handhold and nurture each other to build the strongest, ever-growing
                professional bonds is what awaits at IAMAI's Intersec!
              </p>
            </div>
          </div>

          {/* Right Side Image & Video Section */}
          <div className="col-lg-5">
            <div className="about_img">
              {/* Video Section */}
              <div
                className="video-section"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                <img src="assets/images/about_img.png" alt="Video Thumbnail" />
                <div className="video-overlay">
                  <div className="play-button">
                    <i className="fa fa-play"></i>
                  </div>
                </div>
              </div>

              {/* About Pattern */}
              <div className="about_pattern">
                <img src="assets/images/about_pattern.png" alt="About Pattern" />
              </div>

              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="videoModal"
                tabIndex="-1"
                aria-labelledby="videoModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        className="img-fluid w-100"
                        src="assets/images/about_img.png"
                        alt="Video Modal"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Modal */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
