import React from "react";
import video_shape_2 from "../../../../../assets/img/bg/video_shape_2.png";
import title_shape_2 from "../../../../../assets/img/theme-img/title_shape_2.svg";
import "swiper/css";
import "swiper/css/pagination";
const OurExpertise = ({ ExpertiseArray = {} }) => {
  return (
    <div className="overflow-hidden bg-smoke space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="title-area mb-35 text-center text-xl-start">
              <div className="title-area">
                <div className="shadow-title">Our Expertise</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" loading="lazy" />
                  </div>
                  Our Expertise in {ExpertiseArray.heading}
                </span>
              </div>
              <h2 className="sec-title">
                Impact Overview: What Our Product
                <span className="text-theme"> Delivers</span>
              </h2>
            </div>
            <p className="mt-n2 mb-25 text-center text-xl-start">
              {ExpertiseArray.para}
            </p>
            {ExpertiseArray.keyPoints.map((data, index) => {
              return (
                <div className="pe-xxl-4" style={{ marginBottom: "25px" }}>
                  <div className="skill-feature">
                    <h3 className="skill-feature_title">{data.name}</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: data.per }}>
                        <div className="progress-value">{data.per}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-xl-6 mt-40 mt-xl-0">
            <div className="video-box1">
              <img
                className="tilt-active"
                src={video_shape_2}
                alt="Video"
                loading="lazy"
              />
              <a
                href="https://youtu.be/ix_OpmpsRBY"
                className="play-btn popup-video"
                target="_blank"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-mockup" data-top="0%" data-left="0%">
        <img
          src="assets/img/shape/tech_shape_3.png"
          alt="shape"
          loading="lazy"
        />
      </div>
      <div className="shape-mockup" data-bottom="0%" data-right="0%">
        <img
          src="assets/img/shape/tech_shape_4.png"
          alt="shape"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default OurExpertise;
