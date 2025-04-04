import React from "react";
import choose_3 from "../../assets/img/normal/choose_3.jpg";
import choose_feature_1_1 from "../../assets/img/icon/choose_feature_1_1.svg";
import choose_feature_1_2 from "../../assets/img/icon/choose_feature_1_2.svg";
import choose_feature_1_3 from "../../assets/img/icon/choose_feature_1_3.svg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import feature_box_1 from "../../assets/img/icon/feature_box_1.svg";
import feature_box_2 from "../../assets/img/icon/feature_box_2.svg";
import feature_box_3 from "../../assets/img/icon/feature_box_3.svg";
const CarrerAbout = () => {
  return (
    <div>
      <div className="choose-area overflow-hidden space-top">
        <div className="container th-container4">
          <div className="row">
            <div className="col-xl-6">
              <div className="choose-image4 pe-xl-5 me-xl-4">
                <div className="img1">
                  <img src={choose_3} alt="Choose" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div class="title-area mb-10 text-center text-xl-start">
                <div class="shadow-title">Careers</div>
                <span class="sub-title">
                  <div class="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                      loading="lazy"
                    />
                  </div>
                  Evolving Your Careers
                </span>
                <h2 class="sec-title">
                  Shape the Future
                  <span class="text-theme"> ofTechnology.</span>
                </h2>
              </div>
              <p className="mb-30 pe-xl-2 me-xl-1">
                We're pioneers creating transformative solutions that redefine
                industries. At GenStree, we combine cutting-edge technology with
                human ingenuity to solve complex global challenges.
              </p>
              <div className="choose-feature3-wrap">
                <div className="choose-feature3">
                  <div className="choose-feature3_icon">
                    <img src={choose_feature_1_1} alt="Icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Innovate with Purpose</h3>
                    <p className="choose-feature3_text">
                      Work on groundbreaking projects that create real-world
                      impact
                    </p>
                  </div>
                </div>
                <div className="choose-feature3">
                  <div className="choose-feature3_icon">
                    <img src={choose_feature_1_2} alt="Icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Collaborative Culture</h3>
                    <p className="choose-feature3_text">
                      Join cross-functional teams of industry experts and
                      visionaries
                    </p>
                  </div>
                </div>
                <div className="choose-feature3">
                  <div className="choose-feature3_icon">
                    <img src={choose_feature_1_3} alt="Icon" loading="lazy" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Grow Without Limits</h3>
                    <p className="choose-feature3_text">
                      Continuous learning opportunities & global career paths
                      with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-50">
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="sub-title">Join Our Team</span>
            <h2 className="sec-title">Build Your Future with Us</h2>
          </div>
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src={feature_box_1} alt="Icon" loading="lazy" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Innovative Work Environment</h3>
                  <p className="choose-feature_text">
                    Work in a dynamic and innovative culture that fosters
                    creativity and growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src={feature_box_2} alt="Icon" loading="lazy" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Career Growth Opportunities</h3>
                  <p className="choose-feature_text">
                    Unlock new possibilities with structured career growth and
                    learning programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src={feature_box_3} alt="Icon" loading="lazy" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Work-Life Balance</h3>
                  <p className="choose-feature_text">
                    We believe in a balanced life, offering flexible work hours
                    and a supportive environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerAbout;
