import React from "react";
import arrow2 from "../../../assets/img/shape/arrow2.png";

const ServiceAboutUs1 = ({ aboutData }) => {
  return (
    <div className="space" id="about-sec">
      <div className="container th-container4">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-5">
            <div className="title-area pe-xl-2">
              <span className="sub-title sub-title3 style1">
                {aboutData.title}
              </span>
              <h2 className="sec-title sec-title2">{aboutData.subtitle}</h2>
            </div>
            <div className="about17-text">
              {aboutData.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <p className="mt-n2 mb-25">{aboutData.description}</p>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box18">
              <div className="img1">
                <img
                  src={aboutData.images.main}
                  alt="About"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    width: "740px",
                    height: "404px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="about17-counter-wrapp">
              <div className="counter-card9-wrap">
                {aboutData.stats.map((stat, index) => (
                  <div key={index} className="counter-card9">
                    <div className="media-body">
                      <h3 className="box-number">
                        <span className="counter-number">{stat.number}</span>
                        <span className="text-theme">{stat.unit}</span>
                      </h3>
                      <h6 className="counter-title">{stat.title}</h6>
                      <p className="counter-text">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about17-client-wrapp">
                <div className="cilent-box">
                  <img src={arrow2} alt="Arrow" loading="lazy" />
                  <div className="about-content">
                    <h4 className="box-title">{aboutData.client.title}</h4>
                    <span className="title">{aboutData.client.subtitle}</span>
                    <div className="about-wrapp">
                      <div className="about_review">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={
                              i + 1 <= aboutData.client.stars
                                ? "fa-sharp fa-solid fa-star"
                                : i + 0.5 === aboutData.client.stars
                                  ? "fa-regular fa-star-half-stroke"
                                  : "fa-regular fa-star"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="about17-wrapp">
                    <div className="about17-img">
                      <img
                        src={aboutData.images.client}
                        alt="Client"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAboutUs1;
