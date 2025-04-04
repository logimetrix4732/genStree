import React from "react";
import faq_6_1 from "../../assets/img/normal/faq_6_1.jpg";
import faq_6_2 from "../../assets/img/normal/faq_6_2.jpg";
import faq_6_3 from "../../assets/img/normal/faq_6_3.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
const ChooseUS = () => {
  return (
    <div className="faq-area position-relative space" id="faq-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-img7 mb-xl-0 mt-xl-0 mt-n4 pe-xl-5 me-xl-1">
              <div className="img1">
                <img src={faq_6_1} alt="About" loading="lazy" />
                <div className="img2 jump">
                  <img src={faq_6_2} alt="About" loading="lazy" />
                </div>
                <div className="img3 movingX">
                  <img src={faq_6_3} alt="About" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div class="title-area mb-35 text-center text-xl-start">
              <div class="shadow-title">WHY CHOOSE US?</div>
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" loading="lazy" />
                </div>
                WHY CHOOSE US?
              </span>
              <h2 class="sec-title">
                Maximizing Your Success Benefits of Partnering with
                <span class="text-theme"> GenStree</span>
              </h2>
            </div>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    What sets your team apart from others?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Our dedication and commitment drive us to exceed client
                      expectations, delivering exceptional results through
                      innovation, efficiency, and a passion for excellence in
                      every project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    How do you accommodate different client needs?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We provide flexible engagement models, customizing our
                      approach to meet each client’s unique needs, ensuring
                      optimal efficiency, effectiveness, and seamless project
                      execution for superior results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    What expertise does your team bring to the table?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      With a team of 30+ skilled IT professionals and strong
                      technological expertise, we solve complex challenges
                      through innovative, cutting-edge solutions tailored to
                      client needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    How do you ensure efficiency and cost-effectiveness?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We ensure fast turnaround times, competitive pricing, and
                      timely delivery, all while maintaining high quality
                      standards to meet your business needs effectively and
                      efficiently.
                    </p>
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

export default ChooseUS;
