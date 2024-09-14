import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="lg:flex justify-between gap-3">
        <div className="">
          <Link aria-label="Voyger Home" to="/" className="flex justify-center">
            <img
              style={{ width: 160 }}
              src="/assets/main-logo/voyger.png"
              className="voyger-logo-white"
              alt=""
            />
          </Link>
        </div>
        <h2 className="text-center text-xs lg:text-base">
          Owned by SHIVARAJ ENTERPRISES PVT. LTD.
        </h2>
      </div>
      <div className="lg:flex justify-between mt-3">
        <div className="w-full">
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stories</li>
            <Link to={"/terms-and-conditions"} style={{ color: "white" }}>
              <li>Terms & Conditions</li>
            </Link>
            <Link to={"/privacy-policy"} style={{ color: "white" }}>
              <li>Privacy Policy</li>
            </Link>
            <Link to={"/refund-policy"} style={{ color: "white" }}>
              <li>Refund Policy</li>
            </Link>
            <Link to={"/shipping-policy"} style={{ color: "white" }}>
              <li>Shipping Policy</li>
            </Link>
          </ul>
        </div>
        <div className="w-full mt-6 lg:mt-0">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How To Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="w-full mt-6 lg:mt-0">
          <h2>Contact Us</h2>
          <ul>
            <li>
              69, 2nd Floor, Mahatma Gandhi Road, Thakurpukur, 3a Bus Stand,
              Kolkata, West Bengal - 700063
            </li>
            <li className="contact-info-flex">
              Email :
              <a
                target="_blank"
                href="mailto:arshadchowdhury46@gmail.com"
                className="icon-flex phone-icon ml-2"
              >
                contact@voyger.com
              </a>
            </li>
            <li className="contact-info-flex">
              Phone :{" "}
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+919875437382"
                className="icon-flex phone-icon"
              >
                +919875437382
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-2">
        © 2024 Voyger Online. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
