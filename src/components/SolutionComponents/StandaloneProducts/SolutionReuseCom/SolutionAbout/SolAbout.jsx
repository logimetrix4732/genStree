import React from "react";
import { Link } from "react-router-dom";

const SolAbout = ({ aboutData = [] }) => {
  return (
    <div className="space" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box3">
              {aboutData.images.map((img, index) => (
                <div key={index} className={`img${index + 1}`}>
                  <img src={img} alt="About" loading="lazy" />
                </div>
              ))}
              <div className="shape1">
                <img src={aboutData.shapeImage} alt="Shape" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="title-area">
              <div className="shadow-title">{aboutData.title}</div>
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <img src={aboutData.titleShape} alt="shape" loading="lazy" />
                </div>
                {aboutData.title}
              </span>
            </div>
            <div className="title-area mb-35">
              <h2 className="sec-title">
                {aboutData.title} –{" "}
                {aboutData.subtitle.split(" ").slice(0, -1).join(" ")}
                <span className="text-theme">
                  {" "}
                  {aboutData.subtitle.split(" ").slice(-1)}
                </span>
              </h2>
            </div>

            <p className="mt-n2 mb-25">{aboutData.description}</p>
            <div className="checklist style3 mb-40">
              <ul>
                {aboutData.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-square-check" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link to={"/contactUs"} className="th-btn">
              Explore More
              <i className="fa-regular fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-lg-block"
        data-bottom="0%"
        data-right="0%"
      >
        <div className="particle-2 small" id="particle-1" />
      </div>
    </div>
  );
};

export default SolAbout;
