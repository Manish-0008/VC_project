import React from "react";
import Banner from "./componenets/Banner.jsx";
import About from "./componenets/About.jsx";
import Participants from "./componenets/Participants.jsx";
import Advertiser from "./componenets/Advertiser.jsx";
import Partners from "./componenets/Partners.jsx";
import Attend from "./componenets/Attend.jsx";
import Gallery from "./componenets/Gallery.jsx";
import Footer from "./componenets/Footer.jsx";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Participants />
      <Advertiser />
      <Partners />
      <Attend />
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;
