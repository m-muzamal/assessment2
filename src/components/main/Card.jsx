import React from "react";
import arrow from "../../assets/Arrow.jpg";
import img from "../../assets/img.jpg";
import eye from "../../assets/Eye.png";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/blog/${id}`);
  }
  return (
    <div className="card">
      <div className="img">
        <img src={data?.Image} alt="img" />
      </div>
      <div className="info">
        <div className="top">
          <p className="body2-text">Posted on October 6th 2021</p>
          <p className="body2-text view">
            <img src={eye} alt="eye" /> {data?.viewCount} views
          </p>
          <p className="body2 feature">FEATURED</p>
        </div>
        <h4 onClick={() => handleClick(data?.id)}>{data?.Title}</h4>
        <p className="body2">{data?.Subtitle}</p>
        <a className="read">
          <p className="body1">Read more</p>
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;
