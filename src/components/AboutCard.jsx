import React from "react";
import "../assets/Styles/main.css";

const AboutCard = ({ title, subtitle }) => {
  return (
    <div>
      <div className="div__about">
        <p className="text-title__about">{title}</p>
        <p className="sub-title__about">{subtitle}</p>
      </div>
      {/*  <div className="div__about">
        <p className="text-title__about">24/7</p>
        <p className="sub-title__about">Delivery</p>
      </div>
      <div className="div__about">
        <p className="text-title__about">100K</p>
        <p className="sub-title__about">Transactions</p>
      </div> */}
    </div>
  );
};

export default AboutCard;
