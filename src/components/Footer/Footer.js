import React from "react";
import "./Footer.css";
import logo from "../../assets/images/sample_images/thinkdarklogo.png"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Thinkmart Logo" className="footer-logo" />
          <p>Your one-stop destination for all your shopping needs. Quality, trust, and speed—delivered.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="Catalog/men">Mens</a></li>
            <li><a href="Catalog/women">Womens</a></li>
            <li><a href="wishlist">Wishlist</a></li>
            <li><a href="cart">Cart</a></li>
            
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@thinkmart.com</p>
          <p>Phone: +91 91022 15922</p>
          <p>Address: Mayur Vihar, Delhi</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thinkmart. All rights reserved by Anurag Kashyap.</p>
      </div>
    </footer>
  );
};

export default Footer;
