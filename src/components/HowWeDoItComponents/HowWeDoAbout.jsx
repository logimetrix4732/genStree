import React from "react";
import about_15_1 from "../../assets/img/normal/about_15_1.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import about_feature_2_1 from "../../assets/img/icon/about_feature_2_1.svg";
import about_feature_2_2 from "../../assets/img/icon/about_feature_2_2.svg";
import { Link } from "react-router-dom";
import howWeDoIt from "../../Imges/howWeDoIt.jpg";
import howWeDoIt1 from "../../Imges/howWeDoIt1.jpg";
const HowWeDoAbout = () => {
  return (
    <div id="about-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box17 pe-xl-5">
              <div className="img1">
                <img src={howWeDoIt1} alt="About" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title text-capitalize fs-20">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" loading="lazy" />
                </div>
                How we do it
              </span>
              <h2 className="sec-title">Modern Data & Analytics Platforms</h2>
            </div>
            <p className="mt-n2 mb-25">
              GenStree leverages a technology-agnostic approach to delivering
              data solutions. We combine the best practices of a Modern Data
              Architecture with the use of appropriate technologies best suited
              to deliver individual client outcomes. We work with leading
              technology platforms and are consistently looking for new ways to
              drive client results through modern capabilities.
            </p>
            <div className="about-feature-wrap style5">
              <div>
                <div className="about-feature style5">
                  <div className="about-feature_icon">
                    <img src={about_feature_2_1} alt="Icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Technology-agnostic solutions
                    </h3>
                  </div>
                </div>
                <div className="about-feature style5">
                  <div className="about-feature_icon">
                    <img src={about_feature_2_2} alt="Icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Modern data architecture
                    </h3>
                  </div>
                </div>
                <div className="btn-group style3">
                  <Link
                    to="/contactUs"
                    className="th-btn style-radius text-capitalize"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="about-img">
                <img src={howWeDoIt} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoAbout;
