import React from "react";

const participants = [
  { name: "Amit Sethiya", company: "SYSKA Group", image: "assets/images/Amit_Sethiya copy.jpg" },
  { name: "Deepali Naair", company: "IBM", image: "assets/images/deepali_IBM.jpg" },
  { name: "Jahid Ahmed", company: "HDFC Bank", image: "assets/images/jahid_ahmed.jpg" },
  { name: "Lalatendu Panda", company: "Reliance Retail", image: "assets/images/lalatendu_reliance.jpg" },
  { name: "Amit Sethiya", company: "SYSKA Group", image: "assets/images/Amit_Sethiya copy.jpg" }
];

const PastParticipants = () => {
  return (
    <section className="past-participants">
      <div className="container">
        <div className="content-heading">
          <h3>Past Participants</h3>
          <p>Look who made Intersec lively and happening in the past</p>
        </div>

        <div className="past-participants-slider all-slides">
          {participants.map((participant, index) => (
            <div key={index} className="past-participants-items">
              <div className="participants-card">
                <img className="img-fluid w-100" src={participant.image} alt={participant.name} />
                <div className="names">
                  <h4>{participant.name}</h4>
                  <p>{participant.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center btnDiv">
          <button className="allBtn">VIEW MORE</button>
        </div>
      </div>
    </section>
  );
};

export default PastParticipants;
