import React from "react";
import process_line_3 from "../../../assets/img/bg/process_line_3.svg";
import { Link } from "react-router-dom";

const OurDevelopmentMethodology = ({ processData }) => {
  return (
    <section
      className="process-area-3 overflow-hidden space-bottom"
      style={{ paddingTop: "50px" }}
    >
      <div className="container th-container4">
        <div className="title-area text-xl-start text-center">
          <span className="sub-title">{processData.subtitle}</span>
          <h2 className="sec-title">{processData.title}</h2>
          <p className="sec-text mt-25">{processData.description}</p>
          <Link to={processData.buttonLink} className="th-btn style-radius">
            {processData.buttonText}
          </Link>
        </div>

        <div className="process-card-area3">
          <div className="process-line position-top">
            <img src={process_line_3} alt="line" />
          </div>
          <div className="row gy-40 justify-content-xl-between justify-content-center">
            {processData.steps.map((step) => (
              <div
                key={step.id}
                className="col-md-6 col-xl-auto process-card-wrap"
              >
                <div className="process-card style3">
                  <div className="process-card_icon">
                    <img src={step.img} alt={step.title} loading="lazy" />
                  </div>
                  <div className="process-card_number">{step.id}</div>
                  <h2 className="box-title">{step.title}</h2>
                  <p className="process-card_text">{step.desc}</p>
                  <Link to={step.link} className="link-btn">
                    Learn More <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentMethodology;
