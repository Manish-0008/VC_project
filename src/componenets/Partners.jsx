import React from "react";

const partners = [
  { img: "assets/images/partner_1.png", text: "Partner" },
  { img: "assets/images/partner_2.png", text: "Partner" },
  { img: "assets/images/partner_3.png", text: "Welcome Dinner Partner" },
  { img: "assets/images/partner_4.png", text: "Partner" },
  { img: "assets/images/partner_1.png", text: "Partner" },
];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="content-heading">
          <h3>Partners</h3>
          <p>The more, the merrier! The best in business have partnered with Intersec, have you?</p>
        </div>

        <div className="partners-slider all-slides">
          {partners.map((partner, index) => (
            <div className="partners-items" key={index}>
              <div className="partners-logo">
                <img className="img-fluid w-100" src={partner.img} alt="Partner Logo" />
                <p>{partner.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center btnDiv">
          <p className="mb-4">
            Over the years, our partners have reaped the benefits of exhibiting thought leadership, <br />
            effective lead generation, best-in-class branding & exceptional ROI.
          </p>
          <button className="allBtn" onClick={() => alert("Partner request sent!")}>
            BECOME A PARTNER
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
