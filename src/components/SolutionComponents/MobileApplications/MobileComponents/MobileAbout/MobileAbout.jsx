import React from "react";
import { Link } from "react-router-dom";

const MobileAbout = ({ aboutContent }) => {
  return (
    <div className="about-sec-8 overflow-hidden th-radius3" id="about-sec">
      <div className="container th-container4">
        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-6">
            <div className="space">
              <div className="title-area mb-40">
                <span className="sub-title">About Our App</span>
                <h2 className="sec-title">{aboutContent.title}</h2>
                <p>{aboutContent.description}</p>
              </div>
              <div className="two-column mb-50 list-center ms-0">
                {aboutContent.checklist.map((list, index) => (
                  <div className="checklist style6" key={index}>
                    <ul>
                      {list.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="btn-wrap">
                <Link to={"/contactUs"} className="th-btn style-radius">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 align-self-end">
            <div className="img-box10 text-center mb-xl-0 mt-xl-0 mt-n4">
              <div className="img">
                <img
                  src={aboutContent.images[0]}
                  alt="About"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    width: "700px",
                    height: "420px",
                    borderRadius: "1rem",
                  }}
                />
                <div className="img2 jump">
                  <img
                    src={aboutContent.images[1]}
                    alt="About"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "295px",
                      height: "153px",
                      borderRadius: "1rem",
                      marginBottom: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;
