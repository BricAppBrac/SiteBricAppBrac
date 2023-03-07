import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecapCard1 from "../components/RecapCard1";
import RecapCard2 from "../components/RecapCard2";
import RecapCard3 from "../components/RecapCard3";
import RecapCard4 from "../components/RecapCard4";

const HomeDev = () => {
  return (
    <div className="homedev">
      <Navbar />
      <div className="homedev-content">
        <div className="homedev-text">
          <div className="homedev-text-container">
            <h1>Le Coin des Développeurs</h1>
            <h2>
              Mes récaps contenant l'essentiel pour développer avec REACT.JS, et
              qqs rappels JS, CSS, SASS
            </h2>
            <div class="trait"> </div>
            <div className="recapcard-container">
              <RecapCard1 />
              <RecapCard2 />
              <RecapCard3 />
              <RecapCard4 />
            </div>
            <div class="contact" id="contact">
              <h5>Mélissande</h5>
              <h6>Contact: bricappbrac@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeDev;
