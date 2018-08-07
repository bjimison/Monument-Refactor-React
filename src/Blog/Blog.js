import React from "react";
import Header from "../Header/Header";
import Comment from "../Comment/Comment";
import Gallery from "../Gallery/Gallery";
import "./Blog.css";

const home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Comment />
    </div>
  );
};

export default home;
