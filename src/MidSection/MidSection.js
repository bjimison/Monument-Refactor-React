import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import "./MidSection.css";
import Archive from "../Archive/Archive";

const midsection = () => {
  return (
    <div className="sidebar">
      <Archive />
      <AboutUs />
    </div>
  );
};

export default midsection;
