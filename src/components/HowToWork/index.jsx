import React from "react";
import ConsultingIcon from "../../Imges/ConsultingIcon.png";
import developmentIcon from "../../Imges/developmentIcon.png";
import seoIcon from "../../Imges/seoIcon.png";
import Business1 from "../../Imges/Business1.png";
const HowToWork = () => {
  return (
    <section className="space" id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img
                src="assets/img/theme-img/title_shape_2.svg"
                alt="shape"
                loading="lazy"
              />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line position-top">
            <img
              src="assets/img/bg/process_line_2.svg"
              alt="line"
              loading="lazy"
            />
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={ConsultingIcon}
                    alt="icon"
                    loading="lazy"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Consulting Services
                </h2>
                <p className="process-card_text">
                  We provide expert consulting services to optimize business
                  processes and technology solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={Business1}
                    alt="icon"
                    loading="lazy"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Business Solutions
                </h2>
                <p className="process-card_text">
                  We provide innovative business solutions to optimize
                  efficiency and drive growth globally.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={developmentIcon}
                    alt="icon"
                    loading="lazy"
                    style={{
                      width: "90px",
                      height: "80px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Web Development
                </h2>
                <p className="process-card_text">
                  We create dynamic, responsive websites that drive user
                  engagement and business success.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={seoIcon}
                    alt="icon"
                    loading="lazy"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  SEO Optimization
                </h2>
                <p className="process-card_text">
                  We enhance your online visibility with strategic SEO solutions
                  for higher rankings and traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
