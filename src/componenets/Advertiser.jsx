import React from "react";

const AdvertiserSection = () => {
  return (
    <section className="advertiser-section">
      <div className="container">
        <div className="ad_content">
          <div className="content-heading">
            <h2>Are you an Advertiser?</h2>
          </div>
          <p className="text-light">Your peers are networking at <br /> Intersec!</p>
          <button className="allBtn colored" onClick={() => alert("Invite requested!")}>
            REQUEST AN INVITE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvertiserSection;
