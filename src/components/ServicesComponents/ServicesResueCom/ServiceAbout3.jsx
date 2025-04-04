import React from "react";
import { Link } from "react-router-dom";

const ServiceAbout3 = ({ data, about3features }) => {
  return (
    <div className="position-relative space-top overflow-hidden">
      <div className="container th-container4">
        {data.map((item, index) => (
          <div key={index} className="feature-wrap9 style2 mb-5">
            <div className="row gy-5 justify-content-center justify-content-lg-between align-items-center">
              <div className="col-xl-6 order-lg-4">
                <div className="feature-thumb12_wrapp">
                  <div className="feature-thumb12-3">
                    <img
                      src={item.images?.[0]}
                      alt="Feature 1"
                      loading="lazy"
                    />
                  </div>
                  <div className="feature-thumb12-4 movingX">
                    <img src={item.images?.[1]} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="feature9-content pe-xl-5">
                  <h1 className="feature-content-title mb-20">{item.title}</h1>
                  <p className="mb-20">{item.description}</p>
                  <div className="checklist style7 mb-20">
                    <ul>
                      {about3features.map((feature, index) => (
                        <li key={index}>
                          <i className="far fa-check-circle" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <Link
                      to={item.buttonLink}
                      className="th-btn style-radius text-capitalize"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAbout3;
