import React from "react";
import { Link } from "react-router-dom";

const ServiceAbout2 = ({ features }) => {
  return (
    <div className="position-relative overflow-hidden space">
      <div className="container th-container4">
        <div className="feature-wrap9 style2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="row gy-5 justify-content-center justify-content-lg-between align-items-center"
            >
              <div className="col-xl-6">
                <div className="feature-thumb12_wrapp">
                  <div className="feature-thumb12-1">
                    <img
                      src={feature.image1}
                      alt="feature"
                      loading="lazy"
                      style={{ borderRadius: "1rem" }}
                    />
                  </div>
                  <div className="feature-thumb12-2 movingX">
                    <img
                      src={feature.image2}
                      alt="feature"
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "180px",
                        height: "172px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="feature9-content pe-xl-5">
                  <h1 className="feature-content-title mb-20">
                    {feature.title}
                  </h1>
                  <p className="mb-40">{feature.description}</p>
                  <div className="btn-wrap">
                    <Link
                      to={feature.link}
                      className="th-btn style-radius text-capitalize"
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout2;
