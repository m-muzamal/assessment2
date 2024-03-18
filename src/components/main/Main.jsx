import React, { useEffect, useState } from "react";
import "./main.scss";
import Card from "./Card";
import Cards from "./Cards";
import Header from "../header/Header";
import { useGetAllBlogQuery } from "../../Redux/blogSlice/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs, incrementViewCount } from "../../Redux/blogSlice/blogSlice";

const Main = () => {
  const [visible, setVisible] = useState(6);

  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  console.log("Blogs", blogs);

  const { data, isLoading } = useGetAllBlogQuery();
  const firstblog = isLoading ? "" : blogs[0];

  const handleBlogView = (id) => {
    dispatch(incrementViewCount(Number(id)));
  };

  useEffect(() => {
    if (data) {
      dispatch(setBlogs(data));
    }
  }, [data]);

  return (
    <>
      <Header />
      <main className="main">
        <>
          <div className="main_header">
            <Card data={firstblog} />
          </div>
          <div className="content">
            {isLoading && <div>Loading...</div>}
            {blogs
              ?.map((blog) => (
                <div
                  key={blog.id}
                  className="cards"
                  onClick={() => handleBlogView(blog.id)}
                >
                  <Cards data={blog} />
                </div>
              ))
              .slice(0, visible)}
          </div>
          <button className="btn" onClick={() => setVisible(visible + 3)}>
            Load More
          </button>
        </>
      </main>
    </>
  );
};

export default Main;
