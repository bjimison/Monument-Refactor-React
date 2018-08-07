import React from "react";
import About from "./about.jpg";
import "./AboutUs.css";

const aboutus = () => {
  return (
    <aside>
      <h4 id="about">ABOUT US</h4>
      <p>
        Donec efficitur eu est vitae faucibus. Suspendisse eget est massa. Nam
        eu imperdiet felis. Ut nunc erat, accumsan at felis ut, volutpat
        facilisis ex. Vivamus aliquam varius varius. Morbi varius at orci a
        porttitor.
      </p>
      <p>
        Maecenas porttitor porta est, at efficitur arcu volutpat nec. Phasellus
        a ullamcorper est. Phasellus a tincidunt ante.
      </p>

      <img src={About} alt="#" />

      <h4>RECENT ISSUES</h4>
      <ul>
        <li>
          <a href="./gallery.html#camping">Issue Nineteen - Camping</a>
        </li>
        <li>
          <a href="./gallery.html#food">Issue Nineteen - Food</a>
        </li>
        <li>
          <a href="./gallery.html#signs">Issue Nineteen - Signs</a>
        </li>
        <li>
          <a href="./gallery.html#friends">Issue Nineteen - Friends</a>
        </li>
        <li>
          <a href="./gallery.html#carnivals">Issue Nineteen - Carnivals</a>
        </li>
        <li>
          <a href="./gallery.html#contact_us">Issue Nineteen - Gatherings</a>
        </li>
      </ul>
    </aside>
  );
};

export default aboutus;
