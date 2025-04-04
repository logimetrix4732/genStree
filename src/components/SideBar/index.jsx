import React, { useState } from "react";

const SideBar = ({ isMenuOpen }) => {
  return (
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <div className="mobile-logo">
          <a className="icon-masking" href="index.html">
            <span
              data-mask-src="assets/img/logo.svg"
              className="mask-icon"
            ></span>
            <img src="assets/img/logo.svg" alt="logimetrix" loading="lazy" />
          </a>
        </div>
        <div className={`th-mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="menu-item-has-children mega-menu-wrap">
              <a href="#">Home</a>
              <ul className="mega-menu">
                <li>
                  <a href="#">Multipage</a>
                  <ul>
                    <li>
                      <a href="index.html">Digital Agency</a>
                    </li>
                    <li>
                      <a href="home-web-development.html">Web Development</a>
                    </li>
                    <li>
                      <a href="home-software-company.html">Software Company</a>
                    </li>
                    <li>
                      <a href="home-software-company-2.html">
                        Software Company Style 2
                      </a>
                    </li>
                    <li>
                      <a href="home-startup-company.html">Startup Company</a>
                    </li>
                    <li>
                      <a href="home-it-solution.html">IT Solution</a>
                    </li>
                    <li>
                      <a href="home-web-agency.html">Web Agency</a>
                    </li>
                    <li>
                      <a href="home-startup.html">Home Startup</a>
                    </li>
                    <li>
                      <a href="home-game-solution.html">Game Solution</a>
                    </li>
                    <li>
                      <a href="home-sass-marketing.html">Sass Marketing</a>
                    </li>
                    <li>
                      <a href="home-sass-landing.html">Sass Landing</a>
                    </li>
                  </ul>
                </li>
                {/* Other menu items go here */}
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="service.html">Services</a>
                </li>
                <li>
                  <a href="service-details.html">Services Details</a>
                </li>
              </ul>
            </li>
            {/* Other menu items */}
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
