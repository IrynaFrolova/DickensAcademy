import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="sub-container-hero">
          <div className="text-container">
            <div className="text-block-1">WELCOME TO</div>
            <div className="text-block-2">DICKENS EXECUTIVE COACHING ACADEMY</div>
          </div>
          <div className="text-and-button-container">
            <div className="paragraph">Your resource of choice for coaching education</div>
            <button className="button">Explore Courses</button>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
};

export default Hero;
