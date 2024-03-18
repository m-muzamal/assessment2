import React from "react";
import "./footer.scss";
import fb from "../../assets/Vector.png";
import twitter from "../../assets/Negative.png";
import Insta from "../../assets/Negative1.png";
import linkedIn from "../../assets/Negative4.png";
import Bootom from "../bootom/Bootom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_item">
          <div className="left">
            <h3>Get in touch with us for your service</h3>
            <div className="socials">
              <img src={fb} alt="fb" />
              <img src={twitter} alt="twitter" />
              <img src={Insta} alt="insta" />
              <img src={linkedIn} alt="linkedIn" />
            </div>
          </div>
          <div className="right">
            <div className="item">
              <p className="body1-text">Help line number</p>
              <p className="title-2">1800 265 24 52</p>
            </div>
            <div className="item">
              <p className="body1-text">Address</p>
              <p className="title-2">
                NH 234 Public Square San Francisco 65368
              </p>
            </div>
            <div className="item">
              <p className="body1-text">We are open</p>
              <p className="title-2">Monday to Friday 9:00 AM to  10:00  AM</p>
            </div>
          </div>
        </div>
      </footer>
      <Bootom />
    </>
  );
};

export default Footer;
