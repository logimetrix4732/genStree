import React from "react";
import process_bg_4 from "../../../assets/img/bg/process_bg_4.png";

const ServiceWhatWeDo1 = ({ stepsData }) => {
  return (
    <section
      className="process-area6 space"
      id="process-sec"
      style={{
        backgroundImage: `url(${process_bg_4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container th-container4">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center pe-xl-3 me-xl-3">
              <span className="sub-title sub-title3">{stepsData.subtitle}</span>
              <h2 className="sec-title sec-title2 text-white">
                {stepsData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="process-card-area">
          <div className="row gy-40">
            {stepsData.steps.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3 process-card3-wrap">
                <div className="process-card3">
                  <div className="process-card3_icon">
                    <img src={step.icon} alt="icon" loading="lazy" />
                  </div>
                  <h2 className="box-title">{step.heading}</h2>
                  <p className="process-card3_text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="shape-mockup process-shape d-none d-xl-block"
        style={{
          backgroundImage: `url(${stepsData.shapeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default ServiceWhatWeDo1;
