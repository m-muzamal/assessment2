import React from "react";
import "./header.scss";
import img from "../../assets/Image.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={img} alt="" />
        <h1>Our Blog</h1>
      </div>
      <div className="right">
        <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
        <p className="body1">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </p>
      </div>
    </header>
  );
};

export default Header;
