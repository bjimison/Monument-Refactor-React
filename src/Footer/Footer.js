import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const footer = () => {
  return (
    <footer>
      <div>
        <a href="">
          <i className="fab fa-facebook" />
        </a>
        <SocialIcon className="facebook" url="http://www.facebook.com" />
        <a href="">
          <i className="fab fa-twitter" aria-hidden="true" />
        </a>
        <a href="">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
      </div>
      <form id="contact_us" action="">
        <input type="email" placeholder="Email Address" />
        <input
          className="hover_too"
          type="button"
          value="contact-us"
          placeholder="Contact Us"
        />
      </form>
      <div className="copyright">&Copy;2016 Sarah Holden</div>
    </footer>
  );
};

export default footer;
