import React from "react";

const OurExpertise = () => {
  return (
    <section
      className="bg-smoke"
      id="process-sec"
      data-bg-src="assets/img/bg/process_bg_1.png"
    >
      <div className="container space">
        <div className="title-area text-center">
          <div className="shadow-title">Our Expertise</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img
                src="assets/img/theme-img/title_shape_2.svg"
                alt="shape"
                loading="lazy"
              />
            </div>
            Our Expertise
          </span>
          <h2 className="sec-title">
            Renowned satisfied
            <span className="text-theme"> Clients!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line">
            <img
              src="assets/img/bg/process_line.svg"
              alt="line"
              loading="lazy"
            />
          </div>
          <div className="row gy-40">
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">01</div>
                <div className="process-card_icon">
                  <img
                    src="assets/img/icon/process_card_1.svg"
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  IT Consulting
                </h2>
                <p className="process-card_text">
                  Our IT consulting accelerates digital transformation,
                  optimizing performance to drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">02</div>
                <div className="process-card_icon">
                  <img
                    src="assets/img/icon/process_card_2.svg"
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Web Development
                </h2>
                <p className="process-card_text">
                  Delivering exceptional and innovative web development
                  solutions, trusted by leading companies worldwide.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">03</div>
                <div className="process-card_icon">
                  <img
                    src="assets/img/icon/process_card_3.svg"
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Apps Development
                </h2>
                <p className="process-card_text">
                  Delivering innovative, scalable, and impactful app solutions
                  that exceed expectations for top companies.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">04</div>
                <div className="process-card_icon">
                  <img
                    src="assets/img/icon/process_card_4.svg"
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  DW, BI & Analysis
                </h2>
                <p className="process-card_text">
                  Empowering businesses with innovative Data Warehousing, BI,
                  and Analytics solutions for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
