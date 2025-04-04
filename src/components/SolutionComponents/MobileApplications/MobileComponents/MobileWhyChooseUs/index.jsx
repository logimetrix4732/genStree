import React from "react";
import why81 from "../../../../../assets/img/icon/why-8-1.svg";
import why82 from "../../../../../assets/img/icon/why-8-2.svg";
import why83 from "../../../../../assets/img/icon/why-8-3.svg";
import why84 from "../../../../../assets/img/icon/why-8-4.svg";
import why_8_1 from "../../../../../assets/img/normal/why_8_1.png";
import why_bg_8 from "../../../../../assets/img/bg/why_bg_8.png";
import jammuimg1 from "../../../../../Imges/jammuimg1.png";

const MobileWhyChooseUs = () => {
  return (
    <div className="">
      <div
        className="why-sec-4"
        style={{
          backgroundImage: `url(${why_bg_8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container th-container4">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="title-area text-center">
                <span className="sub-title">SYSTEM ARCHITECTURE</span>
                <h2 className="sec-title">
                  Role-Based{" "}
                  <span className="text-theme fw-medium">Access Matrix</span>
                </h2>
                <p>
                  Our sophisticated access control system ensures secure and
                  efficient platform utilization across all user categories. The
                  architecture follows Zero Trust principles with multi-factor
                  authentication and granular permission controls.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="why-feature-wrap-4-1">
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why81} alt="icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">City Officials</h3>
                    <p className="about-feature_text">
                      Access to AI-powered dashboards for informed
                      decision-making and urban planning.
                    </p>
                  </div>
                </div>
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why82} alt="icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Emergency Responders
                    </h3>
                    <p className="about-feature_text">
                      Real-time incident visualization and automated workflow
                      for faster disaster response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-3">
              <div className="why-feature-wrap-4-2">
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why83} alt="icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">IT Administrators</h3>
                    <p className="about-feature_text">
                      System management, data security enforcement, and
                      infrastructure maintenance.
                    </p>
                  </div>
                </div>
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why84} alt="icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">Secure Access</h3>
                    <p className="about-feature_text">
                      The system follows Zero Trust principles with multi-factor
                      authentication for enhanced security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2">
              <div className="why-thumb-4">
                <img src={jammuimg1} alt="img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileWhyChooseUs;
