import React from "react";
import eye from "../../assets/Eye.png";
import "./blog.scss";
import img from "../../assets/Image.jpg";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../Redux/blogSlice/apiSlice";

const Blog = () => {
  const id = useParams();
  console.log(id.id);
  const { data, isLoading } = useGetSingleBlogQuery(id.id);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <div className="blog">
        <div className="content">
          <div className="top">
            <p className="body2-text">Posted on October 6th 2021</p>
            <p className="body2-text view">
              {" "}
              <img src={eye} alt="" /> 567 views
            </p>
          </div>
          <h3>{data?.Title}</h3>
          <p className="body2">{data?.Subtitle}</p>
        </div>
        <div className="img">
          <img src={data.Image} alt="image" />
        </div>
        <div className="content">
          <h4>{data?.Title}</h4>
          <p className="body2">{data?.Article}</p>
          <p className="body2">{data?.Article}</p>
          <div className="blogImg">
            <img src={data.Image} alt="image" />
          </div>
          <p className="title-1">{data?.Title}</p>
          <p className="body2">{data?.Article}</p>
          <p className="body2 border">{data?.Subtitle}</p>
          <p className="body2">{data?.Article}</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
