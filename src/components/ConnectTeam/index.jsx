import React from "react";
import softwarelogo from "../../assets/img/normal/software-logo.png";
import { Link } from "react-router-dom";
const ConnectTeam = () => {
  return (
    <div className="position-relative space">
      <div className="container th-container4">
        <div className="software-area">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="software-content">
                <div className="title-area mb-10 pe-xl-5 me-xl-3">
                  <h2 className="sec-title sec-title2">
                    Connect Your <span>POC</span> Development
                  </h2>
                  <p className="mb-30">
                    Providing training and support to employees to ensure they
                    understand how to use the POC system effectively and
                    encouraging adoption.
                  </p>
                </div>
                <Link
                  to="/contactUs"
                  className="th-btn style-radius text-capitalize"
                >
                  Browse All Services
                </Link>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="soft-wrapper">
                <div className="soft-image">
                  <img src={softwarelogo} alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectTeam;
