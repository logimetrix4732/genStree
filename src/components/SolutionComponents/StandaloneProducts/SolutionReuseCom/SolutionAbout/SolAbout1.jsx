import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const SolAbout1 = ({ aboutData }) => {
  return (
    <div className="about-area3 overflow-hidden" id="about-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6">
            <div className="pe-xl-5 me-xl-3">
              <div className="title-area style2 mb-30">
                <div className="title-area">
                  <div className="shadow-title">{aboutData.title}</div>
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <img
                        src={aboutData.titleShape}
                        alt="shape"
                        loading="lazy"
                      />
                    </div>
                    {aboutData.title}
                  </span>
                </div>
                <h2 className="sec-title">
                  {aboutData.subtitle.split(" ").slice(0, -1).join(" ")}
                  <span className="text-theme">
                    {" "}
                    {aboutData.subtitle.split(" ").slice(-1)}
                  </span>
                </h2>
              </div>
              <p className="mt-n2 mb-25">{aboutData.description}</p>
              <div className="checklist style7">
                <ul>
                  {aboutData.features.map((feature, index) => (
                    <li key={index}>
                      <i className="far fa-check-circle" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-btn mt-35">
                <Link
                  to="/contactUs"
                  className="th-btn popup-video style-radius text-capitalize"
                >
                  <i className="fa-solid fa-circle-play me-2" />
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="img-box9">
              {aboutData.images.map((img, index) => (
                <div key={index} className={`img${index + 1}`}>
                  <img src={img} alt="About" loading="lazy" />
                </div>
              ))}
              <div className="th-experience">
                <div className="th-experience_content">
                  <h2 className="experience-year">
                    <CountUp
                      start={1}
                      end={aboutData.experienceYears}
                      duration={3}
                    />
                    +
                  </h2>
                  <p className="experience-text">{aboutData.experienceText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolAbout1;
