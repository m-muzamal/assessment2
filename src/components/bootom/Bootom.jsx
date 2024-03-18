import React from "react";
import logo from "../../assets/Logo.png";
import "./bottom.scss";

const Bootom = () => {
  return (
    <footer className="bottom">
      <img src={logo} alt="" />
      <div className="items">
        <a className="body2" href="#">
          Home
        </a>
        <a className="body2" href="#">
          About us
        </a>
        <a className="body2" href="#">
          Services
        </a>
        <a className="body2" href="#">
          Blog
        </a>
        <a className="body2" href="#">
          Contact us
        </a>
      </div>
      <p className="body2-text">@ Copyright Finsweet 2021</p>
    </footer>
  );
};

export default Bootom;
