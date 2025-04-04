import React from "react";
import { Link } from "react-router-dom";

const SolAbout5 = ({ aboutData }) => {
  return (
    <div className="overflow-hidden space">
      <div className="container th-container4">
        {aboutData.map((item) => (
          <div
            className="row align-items-center flex-row-reverse"
            key={item.id}
          >
            <div className="col-xl-5">
              <div>
                <div className="title-area mb-40">
                  <h2 className="sec-title sec-title2">
                    {item.title} <span>{item.highlight}</span>
                  </h2>
                  <p>{item.description}</p>
                </div>
                <div className="two-column mb-50 list-center ms-0">
                  {item.checklist.map((list, i) => (
                    <div className="checklist style10" key={i}>
                      <ul>
                        {list.map((point, idx) => (
                          <li key={idx}>
                            <img src={point.icon} alt="" loading="lazy" />{" "}
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="btn-wrap">
                  <Link
                    to={"/contactUs"}
                    className="th-btn style-radius text-capitalize"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="feature-box me-xl-5 pe-xl-5">
                <div className="img1">
                  <img src={item.featureImg} alt="About" loading="lazy" />
                </div>
                <div className="feature-content11">
                  <h4 className="feature-text">{item.featureText}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolAbout5;
