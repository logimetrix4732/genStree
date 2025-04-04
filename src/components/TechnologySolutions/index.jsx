import React from "react";
import { Link } from "react-router-dom";

const TechnologySolutions = () => {
  return (
    <section className="service-area5 overflow-hidden space" id="service-sec">
      <div className="container th-container4">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex flex-column align-items-center text-center">
            <div className="title-area w-100">
              <div className="title-area mb-35 text-center">
                <div className="shadow-title">Our Services</div>
                <span className="sub-title d-flex align-items-center justify-content-center">
                  <div className="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                      loading="lazy"
                    />
                  </div>
                  Our Services
                </span>
                <h2 className="sec-title">
                  Comprehensive IT
                  <span className="text-theme"> Services</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img
                    src="assets/img/icon/service_4_1.svg"
                    alt="Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to="/contactUs">Web Development</Link>
                </h3>
                <p className="service-box3_text">
                  Build high-performance apps with LAMP, MERN/MEAN, and RoR.
                  Develop native & cross-platform mobile solutions for iOS and
                  Android.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="service-box3_img">
              <img
                src="assets/img/service/service_box_7-4.jpg"
                alt=""
                loading="lazy"
              />
              <div
                className="service-shape"
                data-mask-src="assets/img/shape/ser_shape_2.png"
                alt=""
              />
              <div
                className="service-shape2"
                data-mask-src="assets/img/shape/ser_shape_3.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img
                    src="assets/img/icon/service_4_2.svg"
                    alt="Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to="/contactUs">
                    MERN/MEAN <br />
                  </Link>
                </h3>
                <p className="service-box3_text">
                  Leverage Big Data (Hadoop, Spark), data warehousing, and ETL
                  for smarter decisions. Unlock insights with powerful Business
                  Intelligence (BI) solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img
                    src="assets/img/icon/service_4_3.svg"
                    alt="Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to="/contactUs">AI & Machine Learning</Link>
                </h3>
                <p className="service-box3_text">
                  Drive intelligent automation with AI agents, chatbots, and
                  deep learning. Leverage NLP for language understanding and
                  computer vision for image recognition.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img
                    src="assets/img/icon/service_4_4.svg"
                    alt="Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to="/contactUs">Cybersecurity</Link>
                </h3>
                <p className="service-box3_text">
                  Protect digital assets with penetration testing, threat
                  analysis, and incident response. Ensure compliance with ISO,
                  GDPR, NIST, and enhance security with SOC solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img
                    src="assets/img/icon/service_4_5.svg"
                    alt="Icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to="/contactUs">Cloud & DevOps</Link>
                </h3>
                <p className="service-box3_text">
                  Scale IT with AWS, Azure, and Google Cloud. Streamline
                  deployment with Kubernetes, Docker, CI/CD, serverless,
                  microservices, automation, scalability, security, & DevOps .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xl-3">
            <div className="service-btn-area">
              <Link
                to="/ApplicationDevelopment"
                className="th-btn service-btn text-capitalize"
              >
                View All Services
                <i className="fa-regular fa-arrow-right ms-2" />
              </Link>
              <div className="ser-shape">
                <img src="assets/img/icon/circle.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
