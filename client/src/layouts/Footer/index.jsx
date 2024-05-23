import React from "react";
import "../Footer/index.scss";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer>
          <div className="footer-left">
            <nav>
              <ul>
                <li>
                  <Link style={{ color: "gray" }}>Blog</Link>
                </li>
                <li>
                  <Link style={{ color: "gray" }}>FAQs</Link>
                </li>
                <li>
                  <Link style={{ color: "gray" }}>Contact us</Link>
                </li>
              </ul>
            </nav>
            <p>
              ©2018 All Rights Reserverd. This template is made with by
              <CiHeart />
              Colorlib
            </p>
          </div>
          <div className="footer-right">
            <div className="social">
              <FaFacebookF />
              <FaTwitter style={{ marginLeft: "20px" }} />
              <FaInstagram style={{ marginLeft: "20px" }} />
              <FaSkype style={{ marginLeft: "20px" }} />
              <FaPinterest style={{ marginLeft: "20px" }} />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
