import React from "react";
import CountUp from "react-countup";

import title_shape_2 from "../../../../../assets/img/theme-img/title_shape_2.svg";
import check_4 from "../../../../../assets/img/icon/check_4.svg";
import { Link } from "react-router-dom";

const SolAbout3 = ({ aboutData }) => {
  return (
    <div
      className="about-sec-18 position-relative z-index-3 overflow-hidden space"
      id="about-sec"
    >
      <div className="container th-container4">
        {aboutData.map((item) => (
          <div
            className="row justify-content-between align-items-center"
            key={item.id}
          >
            <div className="col-xl-6">
              <div className="img-box21 pe-xl-5 me-xl-2">
                {item.images.map((img, index) => (
                  <div className={`img${index + 1}`} key={index}>
                    <img src={img} alt="About" loading="lazy" />
                  </div>
                ))}
                <div className="th-experience">
                  <h2 className="experience-year">
                    <CountUp
                      start={1}
                      end={item.experienceCount}
                      duration={10}
                    />
                    +
                  </h2>
                  <p className="experience-text">{item.experienceText}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="title-area pe-xl-3"
                style={{ marginBottom: "20px" }}
              >
                <span className="shadow-title">{item.shadowTitle}</span>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" loading="lazy" />
                  </div>
                  {item.subTitle}
                </span>
                <h2 className="sec-title mt-2 mb-3">{item.secTitle}</h2>
                <p className="mb-4">{item.description}</p>
              </div>
              <div className="two-column style4 justify-content-between mb-30 list-center ms-0">
                {item.checklist.map((list, i) => (
                  <div className="checklist style13" key={i}>
                    <ul>
                      {list.map((point, idx) => (
                        <li key={idx}>
                          <img src={check_4} alt="" loading="lazy" /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolAbout3;
