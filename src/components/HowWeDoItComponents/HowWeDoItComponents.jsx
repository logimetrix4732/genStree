import React from "react";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";

const HowWeDoItComponents = ({ howWeDoItData }) => {
  return (
    <div className="space" id="about-sec">
      <div className="container th-container4">
        {howWeDoItData.map((item) => (
          <div className="row" key={item.id}>
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box17 pe-xl-5">
                <div className="img1">
                  <img
                    src={item.imgSrc}
                    alt="About"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "800px",
                      height: "310px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-35">
                <span className="sub-title text-capitalize fs-20">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" loading="lazy" />
                  </div>
                  {item.subtitle}
                </span>
                <h2 className="sec-title">{item.title}</h2>
              </div>
              <p className="mt-n2 mb-25">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDoItComponents;
