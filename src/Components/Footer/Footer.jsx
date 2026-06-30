import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="footer">
        <div className="comapny">
          <h1>E-Commerce.</h1>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            explicabo debitis natus accusamus adipisci veniam. accusamus
            nostrum, eos ullam perspiciatis cupiditate magni quod.
          </p>
          <div className="social-icons">
            <a href="www.facebook.com/e-commerce"><FaFacebook className="icons" style={{color: "#1877f2"}}/></a>
            <a href="www.instagram.com/e-commerce"><FaInstagram className="icons" style={{color: "#e4405f"}}/></a>
            <a href="www.twitter.com/e-commerce"><FaTwitter className="icons" style={{color: "#1da1f2"}}/></a>
            <a href="www.linkedin.com/e-commerce"><LiaLinkedinIn className="icons" style={{color: "#0a66c2"}}/></a>
          </div>
        </div>
        <div className="links">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-icon-cont">
            <FaPhoneAlt />
            <p>+91-887-895-8452</p>
          </div>
          <div className="contact-icon-cont">
            <MdEmail />
            <p>contact@e-commerce.com</p>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="copyright">
        <p>Copyright 2026 &copy; E-Commerce.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
