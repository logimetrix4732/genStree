import React from "react";

const HappyClient = () => {
  return (
    <div
      className="bg-theme space-extra"
      data-bg-src="assets/img/bg/counter_bg_1.png"
    >
      <div className="container py-2">
        <div className="row gy-40 justify-content-between">
          <div className="col-6 col-lg-auto">
            <div className="counter-card">
              <div className="counter-card_icon">
                <img
                  src="assets/img/icon/counter_1_1.svg"
                  alt="Icon"
                  loading="lazy"
                />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <span className="counter-number">650</span>+
                </h2>
                <p className="counter-card_text">Finished Project</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-auto">
            <div className="counter-card">
              <div className="counter-card_icon">
                <img
                  src="assets/img/icon/counter_1_2.svg"
                  alt="Icon"
                  loading="lazy"
                />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <span className="counter-number">689</span>+
                </h2>
                <p className="counter-card_text">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-auto">
            <div className="counter-card">
              <div className="counter-card_icon">
                <img
                  src="assets/img/icon/counter_1_3.svg"
                  alt="Icon"
                  loading="lazy"
                />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <span className="counter-number">150</span>+
                </h2>
                <p className="counter-card_text">Skilled Experts</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-auto">
            <div className="counter-card">
              <div className="counter-card_icon">
                <img
                  src="assets/img/icon/counter_1_4.svg"
                  alt="Icon"
                  loading="lazy"
                />
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <span className="counter-number">253</span>+
                </h2>
                <p className="counter-card_text">Honorable Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
