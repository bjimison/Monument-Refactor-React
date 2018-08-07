import React from "react";
import "./Header.css";

const header = () => {
  return (
    <header className="head_image">
      <div className="title_wrap">
        <a href="" className="hamburger">
          <i className="fa fa-bars" />
        </a>
      </div>
      <h2>
        <a href="index.html">MONUMENT</a>
      </h2>
    </header>
  );
};

export default header;
