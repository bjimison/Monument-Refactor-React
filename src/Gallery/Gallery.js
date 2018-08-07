import React from "react";
import Gallery1 from "./gallery_1.jpg";
import Gallery2 from "./gallery_2.jpg";
import Gallery3 from "./gallery_3.jpg";
import Gallery4 from "./gallery_4.jpg";
import Gallery5 from "./gallery_5.jpg";
import Gallery6 from "./gallery_6.jpg";

const gallery = () => {
  return (
    <main>
      <h4>RECENT ISSUES</h4>
      <ul className="sidebar">
        <li>
          <a href="#camping">Issue Nineteen - Camping</a>
        </li>
        <li>
          <a href="#food">Issue Nineteen - Food</a>
        </li>
        <li>
          <a href="#signs">Issue Nineteen - Signs</a>
        </li>
        <li>
          <a href="#friends">Issue Nineteen - Friends</a>
        </li>
        <li>
          <a href="#carnivals">Issue Nineteen - Carnivals</a>
        </li>
        <li>
          <a href="#gatherings">Issue Nineteen - Gatherings</a>
        </li>
      </ul>

      <div className="container">
        <div id="camping">
          <h3>Issue Nineteen - Camping</h3>
          <img src={Gallery1} alt="#" />
          <p />
        </div>

        <div id="food">
          <h3>Issue Nineteen - Food</h3>
          <img src={Gallery2} alt="#" />
          <p />
        </div>

        <div id="signs">
          <h3>Issue Nineteen - Signs</h3>
          <img src={Gallery3} alt="#" />
          <p />
        </div>

        <div id="friends">
          <h3>Issue Nineteen - Friends</h3>
          <img src={Gallery4} alt="#" />
          <p />
        </div>

        <div id="carnivals">
          <h3>Issue Nineteen - Carnivals</h3>
          <img src={Gallery5} alt="#" />
          <p />
        </div>

        <div id="gatherings">
          <h3>Issue Nineteen - Gatherings</h3>
          <img src={Gallery6} alt="#" />
          <p />
        </div>
      </div>
    </main>
  );
};

export default gallery;
