import React from "react";

const AttendSection = () => {
  return (
    <section className="attend-section">
      <div className="container">
        <div className="attend-div">
          <h2>JUST WANT TO ATTEND?</h2>
          <button className="allBtn colored" onClick={() => alert("Enquiry form will open!")}>
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default AttendSection;
